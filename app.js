/**
 * Module dependencies.
 */

var express = require('express')
    , routes = require('./routes'),io = require('socket.io'),utils=require('util'),py=require('./lib/py');

var app = module.exports = express.createServer(),io = io.listen(app);
io.sockets.on('connection', function (socket) {
    socket.on('msg', function (data) {
        py.findPy(data,function(words){
            socket.emit('msg', utils.inspect(words));
        });
    });
});
// Configuration

app.configure(function () {
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser());
    app.use(express.session({ secret:'your secret here' }));
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

app.configure('development', function () {
    app.use(express.errorHandler({ dumpExceptions:true, showStack:true }));
});

app.configure('production', function () {
    app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);
//app.get('/py/:key', routes.py);

app.listen(8080, function () {
    console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
