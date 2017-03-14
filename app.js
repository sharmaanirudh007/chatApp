var express = require("express");

var http = require("http");

var socketIO = require("socket.io");

var app = express(app);

var server = http.createServer(app);

var io = socketIO(server);

app.use(express.static('./public'));

io.on('connection',function(socket){
  console.log("New user connected");
  //console.log(socket);
  socket.on('disconnect',function(){
    console.log("User disconnected");
    });
    socket.on('newmessage',function(message){
     console.log(message);
     socket.broadcast.emit('newmessage1',{
       //from: message.from,
       text: message.text
     });
    });
});


server.listen(3000);
