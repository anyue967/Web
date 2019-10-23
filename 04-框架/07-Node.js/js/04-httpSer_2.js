var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function(req, res) {
	if(req.url === '/' || req.url === '/index') {
		fs.readFile(path.join(__dirname, '../html', 'index.html'), function(err, data) {
			if(err) {
				throw err;
			}
			res.end(data);
		});
	}
	else if(req.url === '/login') {
		fs.readFile(path.join(__dirname, '../html', 'login.html'), function(err, data) {
			if(err) {
				throw err;
			}
			res.end(data);
		});
	} 
	else if(req.url === '/img/01.png') {
		fs.readFile(path.join(__dirname, '../img', '01.png'), function(err, data) {
			if(err) {
				throw err;
			}
			res.setHeader('Content-Type', 'img/01-png');
			res.end(data);
		});
	}
	else if(req.url === '/css/index.css') {
		fs.readFile(path.join(__dirname, '../css', 'index.css'), function(err, data) {
			if(err) {
				throw err;
			}
			res.setHeader('Content-Type', 'text/css');
			res.end(data);
		});
	}
	else {
		fs.readFile(path.join(__dirname, '../html', '404.html'), function(err, data) {
			if(err) {
				throw err;
			}
			res.end(data);
		});
	}
}).listen(8080, function() {
	console.log('http://localhost:8080');
});