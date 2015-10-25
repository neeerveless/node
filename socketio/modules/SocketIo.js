nickNames = {};
exports.socketIoListen = function(http) {
  var io = require('socket.io')(http);

  io.on('connection', function(socket) {

    console.log('connection', socket.id);

    socket.on('all', function(data) {
      io.sockets.emit('message', makeMessage(socket.id, data));
    });

    socket.on('join', function(data) {
      nickNames[socket.id] = data.nickName;
      console.log(nickNames[socket.id]);
      var roomName = data.roomName;
      socket.join(roomName);
    });

    socket.on('room', function(data) {
      io.sockets.to(data.roomName).emit('message', makeMessage(socket.id, data));
    });

    socket.on("disconnect", function() {
      console.log('disconnect', socket.id);
      delete nickNames[socket.id];
    });

  });
}

/*
 * 日付を取得
 */
function getDate() {
  var date  = new Date();
  date      = new Date(date.getTime() + 9 * 60 * 60 * 1000);

  var month   = ("0" + (date.getMonth() + 1)).slice(-2);
  var day     = ("0" + date.getDate()).slice(-2);
  var hour    = ("0" + date.getHours()).slice(-2);
  var minute  = ("0" + date.getMinutes()).slice(-2);
  var second  = ("0" + date.getSeconds()).slice(-2);
  // return (month+"/"+day+" "+hour+":"+minute+":"+second);
  return (hour+":"+minute+":"+second);
}

function makeMessage(id, data) {
  return {
    nickName: nickNames[id],
    message:  data.message,
    time:     getDate()
  };
}
