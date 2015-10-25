var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('room/index', { title: 'room' });
});

router.post('/', function(req, res) {
  res.redirect(req.body.roomName);
});

router.all('/:roomName', function(req, res) {
  res.render('room/room', { roomName: req.params.roomName });
});

module.exports = router;

