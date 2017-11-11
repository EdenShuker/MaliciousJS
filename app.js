var express = require('express');
var app = express();
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http').Server(app);
var io = require('socket.io')(http);

var index = require('./routes/index');
var users = require('./routes/users');
var searchEngine = require('./routes/searchEngine');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/searchEngine', searchEngine);

http.listen(3000, function () {
    console.log('listening on *:3000');
});

var myMsgDb = [];

io.sockets.on('connection', function (socket) {
    console.log('A user connected');

    socket.on('disconnect', function(){
        console.log('user disconnected');
    }).on('sendMsg', function (data) {
        // add the msg to db
        myMsgDb.push(data);
        // broadcast msg
        io.sockets.emit('PostMessage', [data]);
    });

    // send previous msgs to current new user only
    if (myMsgDb.length){
        socket.emit('PostMessage', myMsgDb);
    }
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;