"use strict";

const path = require("path");
const Mongoose = require('mongoose');
const { mongodb } = require('../config').get();
const { fileDeepPath } = require('../utils/commonUtils');

const db = {};

/*
 认证数据库
 */
Mongoose.connect(mongodb.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
Mongoose.connection.on("error", function (error) {
  console.log("数据库连接失败：" + error);
});
Mongoose.connection.on("open", function () {
  console.log("mongoose连接成功【" + mongodb.db + "】");
});

fileDeepPath(path.join(__dirname, '../models/mongoose')).filter((file) => {
  return file.indexOf('.js') != -1 && (file.indexOf('index.js')) === -1;
}).forEach(function (file) {
  var model = require(file);
  db[model.modelName] = model;
});

module.exports = db;
