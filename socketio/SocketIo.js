connectUsers = {};

exports.socketIoListen = function(http) {
  var io = require('socket.io')(http);
  io.on('connection', function(socket) {
    connectUsers[socket.id] = socket;

    socket.on('init', function(data){
      console.log('init-server', socket.id);
      var firstConnentUser = connectUsers[Object.keys(connectUsers)[0]];
      firstConnentUser.emit('connected', {id: socket.id});
    });

    socket.on('connecting', function(data){
      console.log('connecting-server', data.id);
      console.log(data.d);
      connectUsers[data.id].emit('connecting', data);
    });

    socket.on('send', function(event) {
      var message = event.message;
      socket.emit('push', message);
      socket.broadcast.emit('push' , message);
    });

    socket.on("disconnect", function() {
      console.log("disconnect:" + socket.id);
      delete connectUsers[socket.id];
    });
  });
}

function getFirstKey(objects) {
  return Object.keys(objects)[0];
}

