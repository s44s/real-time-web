// modules laden (express als framework)
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// view engine setup > templates weergeven
app.set('views', 'views');
app.set('view engine', 'ejs');

app.use(express.static('public'));

//de routes defineren (zelfde structuur als mappen)
var indexRouter = require('./routes/index');
var detailRouter = require('./routes/detail');

// connect routers to routes, weblinkjes
app.use('/', indexRouter);
app.use('/', detailRouter);

// socket.io
var numUsers = 0;

io.on('connection', function(socket){
	socket.on('chat message', function(msg){
    socket.broadcast.emit('chat message', msg)
  });

	socket.on('background change', function(color){
		io.emit('background color', color);
	});
});

// io.on('connection', function (socket) {
//   var addedUser = false;
//
// 	// when the client emits 'add user', this listens and executes
//   socket.on('add user', function (username) {
//     if (addedUser) return;
//
//     // we store the username in the socket session for this client
//     socket.username = username;
//     ++numUsers;
//     addedUser = true;
//     socket.emit('login', {
//       numUsers: numUsers
//     });
//   });
//
//   // when the client emits 'new message', this listens and executes
//   socket.on('new message', function (data) {
//     // we tell the client to execute 'new message'
//     socket.broadcast.emit('new message', {
//       username: socket.username,
//       message: data
//     });
//   });
// });


http.listen(5000, function(){
  console.log('App listening on port 3000!');
});
