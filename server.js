
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , ejs = 	require('ejs')
  , sass = require("node-sass")
  , http = require('http')
  , path = require('path');

var server = express();

server.configure(function(){
  server.set('port', process.env.PORT || 8080);
  server.set("view options", {layout: false});  //This one does the trick for rendering static html
  server.engine('html', require('ejs').renderFile);
  server.set('view engine', 'html');
  server.use(express.favicon());
  server.use(express.logger('dev'));
  server.use(express.bodyParser());
  server.use(express.methodOverride());
  server.use(server.router);
  server.use(express.static(path.join(__dirname, 'public')));
});

ejs.open = '{{'; 
ejs.close = '}}';


server.all("*", function(req, res, next) {
	var request = req.params[0];
	if((request === "/")||(request === "")) {
		request = "/index.html";
	}
	if((request.substr(0, 1) === "/")&&(request.substr(request.length - 4) === "html")) {
		request = request.substr(1);
		res.render(request);
	} else {
		next();
	}
});


server.get('/', function(req, res){
  res.render('index', {
    title: 'Pattern Portfolio',
    description: 'A living document of Responsive Deliverables'
  });
});

server.configure('development', function(){
  server.use(express.errorHandler());
});

server.get('/', routes.index);
server.get('/users', user.list);

http.createServer(server).listen(server.get('port'), function(){
  console.log("Express server listening on port " + server.get('port'));
});
