exports.socketIoListen = function(http) {
  var io = require('socket.io')(http);

  io.on('connection', function(socket) {

    console.log('connection', socket.id);

    socket.on('all', function(data) {
      var message = data.message;
      io.sockets.emit('all', message);
    });

    socket.on('join', function(data) {
      var roomName = data.roomName;
      socket.join(roomName);
    });

    socket.on('room', function(data) {
      var roomName = data.roomName;
      var message = data.message;
      io.sockets.to(roomName).emit('room', message);
    });

    socket.on("disconnect", function() {
      console.log('disconnect', socket.id);
    });

  });
}
