var express = require('express'),
  routes = require('./routes'),
  http = require('http'),
  path = require('path');
var app = express();
app.configure(function(){
  app.set('port', process.env.POST || 3000);
  app.set('view', __dirname + './views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname,'public')));
});
app.configure('development', function(){
  app.use(express.errorHandler());
});
app.get('/', routes.index);