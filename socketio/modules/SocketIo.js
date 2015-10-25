exports.socketIoListen = function(http) {
  var io = require('socket.io')(http);

  io.on('connection', function(socket) {

    console.log('connection', socket.id);

    socket.on('send', function(data) {
      var message = data.message;
      io.sockets.emit('push', message);
    });

    socket.on("disconnect", function() {
      console.log('disconnect', socket.id);
    });

  });
}
