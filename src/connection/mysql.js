"use strict";

const path = require("path");
const Sequelize = require("sequelize");
const { mysql } = require('../config').get();
let sequelize = new Sequelize(mysql.database, mysql.user, mysql.password, {
  ...mysql,
  "dialect": "mysql",
  "timezone": "+08:00"
});
const db = {};
const { fileDeepPath } = require('../utils/commonUtils');

/*
 认证数据库sequelize.authenticate() 回调函数用来验证是否连接数据库成功
 */
sequelize
  .authenticate()
  .then(() => {
    console.log('mysql连接成功【' + mysql.database + '】.');
  })
  .catch(err => {
    console.error('mysql连接错误【' + mysql.database + '】:', err.stack);
    process.exit()
  });

fileDeepPath(path.join(__dirname, '../models/mysql')).filter((file) => {
  return file.indexOf('.js') != -1 && (file.indexOf('index.js')) === -1;
}).forEach(function (file) {
  let model = sequelize.import(file);
  db[model.name] = model;
});

Object.keys(db).forEach(function (modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
/**
 * 数据模型同步
 */
// db.sequelize.sync().then(function (data) {
//   console.log("mysql模型同步完成");
// });

module.exports = db;
