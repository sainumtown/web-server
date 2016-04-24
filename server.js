var express = require('express');
var app =  express();
var PORT = process.env.PORT || 3000;
var middleware = require('./middleware.js');

/*app.use(middleware.requireAuthentication);*/
app.use(middleware.logger);

app.get('/', function ( req, res){
	res.send('Hello Express');
});

app.get('/help', middleware.logger,function ( req, res){
	res.send('This is help');
});

app.get('/about', function ( req , res){
	res.send('This is about');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
	console.log('Express server started in port ' + PORT );
});