var express = require('express');
var router = express.Router();
var stash = express();

router.get('/', function(req, res) {
  res.render('room/index', { title: 'room' });
});

router.post('/', function(req, res) {
  stash.set('nickName', req.body.nickName);
  res.redirect(req.body.roomName);
});

router.all('/:roomName', function(req, res) {
  res.render('room/room', { roomName: req.params.roomName, nickName: stash.get('nickName') });
});

module.exports = router;

