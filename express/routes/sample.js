var express = require('express');
var router = express.Router();
var sample = express();

router.param('arg', function(req, res, next, id) {
  sample.set('chained', 'chained');
  next();
});

router.get('/:arg', function(req, res, next) {
  res.render('sample/detail', {
    title: 'detail',
    chained: sample.get('chained'),
    arg: req.params.arg,
    method: 'get'
  });
});

router.post('/:arg', function(req, res, next) {
  res.render('sample/detail', {
    title: 'detail',
    chained: sample.get('chained'),
    arg: req.params.arg,
    method: 'post'
  });
});

router.all('/:arg/edit', function(req, res, next) {
  res.render('sample/edit', {
    title: 'edit',
    chained: sample.get('chained'),
    arg: req.params.arg
  });
});

router.all('/:arg/delete', function(req, res, next) {
  res.render('sample/delete', {
    title: 'delete',
    chained: sample.get('chained'),
    arg: req.params.arg
  });
});

module.exports = router;
