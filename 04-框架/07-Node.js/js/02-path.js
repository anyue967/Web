// path 模块
var fs = require('fs')
// var path = require('path')

// var filename = path.join(__dirname, 'hello.txt');
// console.log(filename);

// fs.readFile(filename, 'utf8', function(err, data) {
// 	if(err) {
// 		throw err;
// 	}
// 	console.log(data);
// });

// 创建目录
fs.mkdir('test-mkdir', function(err) {
	if(err) {
		console.log('创建目录出错，信息如下：')
		console.log(err);
	}
	else {
		console.log('目录创建成功');
	}
});
