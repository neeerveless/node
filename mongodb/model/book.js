var mongoose = require('mongoose');
var schema = mongoose.Schema;

var bookSchema = schema({
  title: String,
  auther: String
});

module.exports = mongoose.model('Book', bookSchema);
