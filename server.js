var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);
app.set('views', __dirname + '/views');

var routes = require('./routes.js')(app);

var server = app.listen(3333,function() 
{
    var host = server.address().address;
    var port = server.address().port;
    console.log('Server listening at http://%s:%s', host, port);
});

module.exports = server;
