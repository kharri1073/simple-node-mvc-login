var express = require('express');
var app = express();
var passport = require('passport');
var session = require('express-session');

env = process.env.NODE_ENV || "development";
path = require('path');
fs = require('fs');

// session serialization
passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (obj, done) {
    done(null, obj);
}); 

app.use(express.static(path.join(__dirname,'public')));

app.use(session({
    secret: 'dowhatnow',
    resave: false,
    saveUninitialized: true,
    cookie: { path: '/', httpOnly: true, secure: false, maxAge: null }
}));
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);
app.set('views', path.join(__dirname,'views'));

var routes = require('./routes.js')(app);

var server = app.listen(3333,function() 
{
    var host = server.address().address;
    var port = server.address().port;
    console.log(env + ' server listening at http://%s:%s', host, port);
});

module.exports = server;
