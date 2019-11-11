var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');
var app = express();
var server = http.Server(app);
var io = socketIO(server);
var fs = require('fs');
app.set('port', 5000);
app.use(express.static('../client')); // Routing
app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'index.html'));
});

server.listen(5000, function() {
  console.log('Starting server on port 5000');

});

io.on('connection', function(socket) {

  console.log("connection created on " + socket.request.connection.remoteAddress + " : " + socket.request.connection.remotePort);

});
