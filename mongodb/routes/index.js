var express = require('express');
var router = express.Router();
var book = require('../model/book');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

  var newBook = new book({ title:'title', auther:'auther'});
    newBook.save(function(err){
      if (err) {
        console.log(err);
      } else {
        console.log('success');
      }
    });
});

module.exports = router;
