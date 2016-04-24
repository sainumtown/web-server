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

module.exports = middleware;