// 1.REPL ==>Read Eval Print Loop(交互式解释器)
	// .exit 退出node 环境
	// 单线程异步非阻塞IO

// 2.写文件操作
// var fs = require('fs')

// var msg = "hello world!";

// fs.writeFile('./hello.txt', msg, 'utf8', function(err) {
// 	console.log("111");
// 	if(err) {	// err != null
// 		console.log('写文件出错, 具体错误:' + err);
// 	} 
// 	else {
// 		console.log('ok');
// 	}
// });

// console.log('222');

// 3.读文件操作
	// fs.readFile(fiel[, options], callback)

// var fs = require('fs');

// fs.readFile('./hello.txt', 'utf8', function(err, data) {
// 	if(err) {  // err != null
// 		throw err;
// 	}
// 	// data ==>Buffer对象，保存的是字节
// 	// console.log(data.toString('utf8'));
// 	console.log(data);
// });

// 4. 解决路径问题
	// __dirname  E:\learn\GitHub\Web\04-框架\07-Node.js
	// __filename  E:\learn\GitHub\Web\04-框架\07-Node.js\01-fs.js
	
// console.log(__dirname);
// console.log(__filename);