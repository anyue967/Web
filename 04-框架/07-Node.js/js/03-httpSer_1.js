var http = require('http');

// 1.创建http 服务对象
// var server = http.createServer();

// // 2.监听用户请求事件
// server.on('request', function(request, response) {
// 	response.setHeader('Content-Type', 'text/html', 'charset=utf-8');
// 	response.write('<h1>Hello Nodejs</h1>');

// 	// 结束请求，否则客户端会一直等待服务器响应结束
// 	response.end();
// });

// // 3.启动服务
// server.listen(8080, function() {
// 	console.log('服务器启动了，请访问：http://localhost:8080');
// });

http.createServer(function(req, res) {
	// console.log(req.url);

	
	res.end();
}).listen(8080, function() {
	console.log('http://localhost:8080');
});
