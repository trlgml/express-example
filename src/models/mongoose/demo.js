var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SchemaInstance = new Schema({
  id: { type: String, default: '' },
});

module.exports = mongoose.model('demo', SchemaInstance);