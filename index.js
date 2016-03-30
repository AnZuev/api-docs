'use strict';

var connect = require('connect');
var http = require('http');
var bodyParser = require('body-parser');
var logger = require('morgan');
var fs = require('fs');
var serveStatic = require('serve-static');
var path = require('path');



var serverPort = 3005;
var app = connect();


app
	.use(logger('dev'))
	.use(serveStatic('public'))
	.listen(serverPort, function(err, result){
		if(err) throw err;
		else{
			console.log("Сервер запущен, слушаем %d порт", serverPort);
		}
	});
