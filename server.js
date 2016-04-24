var express = require('express');
var app =  express();
var port = 3000;

var middleware = {
	requireAuthentication: function(req , res, next){
		console.log('private hit');
		next();
	},
	logger: function(req , res, next){
		console.log(req.method + ' ' + new Date().toString() + ' ' + req.originalUrl );
		next();
	}
};

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

app.listen(port, function(){
	console.log('Express server started in port ' + port );
});