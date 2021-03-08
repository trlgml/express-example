var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SchemaInstance = new Schema({
  // id: { type: String, default: '' },
  // type: { type: String, default: '' },
  // name: {
  //   first: String,
  //   last: String
  // },
  // tags: { type: [String], index: true } // field level

  "name": String,
  "sex": String,
  "age": Number,
  "create_time": Date
});

// 实例方法
SchemaInstance.methods.customMethods = function (cb) {
  return this.model('Demo').find({ type: this.type }, cb);
};

// 静态方法
SchemaInstance.statics.customStatics = function (type, cb) {
  return this.find({ type: new RegExp(type, 'i') }, cb)
};

SchemaInstance.virtual('fullName').get(function () {
  return this.name.first + ' ' + this.name.last;
});

module.exports = mongoose.model('Demo', SchemaInstance);