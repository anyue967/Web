## webpack 入门教程
### [WebPack 教程参考](http://guowenfh.github.io/2016/03/24/vue-webpack-01-base/)
### [webpack 入门指南](https://github.com/nimojs/webpack-book)
### [webpack 简书教程](http://www.jianshu.com/p/bb48898eded5)

### 1.了解Webpack相关
+ 1.1什么是webpack?
> Webpack是一个模块打包器(bundler),在Webpack看来, 前端的所有资源文件(js/json/css/img/less/...)都会作为模块处理,它将根据模块的依赖关系进行静态分析，生成对应的静态资源

+ 1.2理解Loader
> Webpack 本身只能加载JS/JSON模块，如果要加载其他类型的文件(模块)，就需要使用对应的loader 进行转换/加载,Loader 本身也是运行在 node.js 环境中的 JavaScript 模块,它本身是一个函数，接受源文件作为参数，返回转换的结果,loader 一般以 xxx-loader 的方式命名，xxx 代表了这个 loader 要做的转换功能，比如 json-loader

+ 1.3配置文件(默认)
  - webpack.config.js : 是一个node模块，返回一个 json 格式的配置信息对象
+ 1.4插件
  - 插件件可以完成一些loader不能完成的功能。
  - 插件的使用一般是在 webpack 的配置信息 plugins 选项中指定。
  - CleanWebpackPlugin: 自动清除指定文件夹资源
  - HtmlWebpackPlugin: 自动生成HTML文件并
  - UglifyJSPlugin: 压缩js文件
	
### 2.学习文档 : 
+ 2.1webpack官网: https://github.com/webpack/webpack
+ 2.2webpack2文档(英文): https://webpack.js.org/
+ 2.3webpack2文档(中文): https://doc.webpack-china.org/

### 3开启项目
+ 3.1初始化项目:
```
生成package.json文件 
{
    "name": "webpack_test",
    "version": "1.0.0"
} 
```
+ 3.2安装webpack
  - `npm install webpack -g`　//全局安装
  - `npm install webpack --save-dev`　//局部安装
+ 3.3编译打包应用
  * 创建入口src/js/ : entry.js
  	- `document.write("entry.js is work");`
  * 创建主页面: dist/index.html
    - `<script type="text/javascript" src="bundle.js"></script>`
  * 编译js
    - `webpack src/js/entry.js dist/bundle.js`  
  * 查看页面效果

### 4.添加js/json文件
* 4.1创建第二个js: src/js/math.js
``` 
export function square(x) {
    return x * x;
}
	    
export function cube(x) {
    return x * x * x;
}
```
* 4.1创建json文件: src/json/data.json
```
{
    "name": "Tom",
    "age": 12
}
```
* 4.2更新入口js : entry.js
```
import {cube} from './math'
import data from '../json/data.json'　//注意data会自动被转换为原生的js对象或者数组
document.write("entry.js is work <br/>");
document.write(cube(2) + '<br/>');
document.write(JSON.stringify(data) + '<br/>')
```
* 4.3编译js:
```
webpack src/js/entry.js dist/bundle.js
```
* 4.4查看页面效果

### 5.使用webpack配置文件
* 5.1创建webpack.config.js
```
// path内置的模块，用来设置路径
const path = require('path');
module.exports = {
	// 入口文件
    entry: './src/js/entry.js',
    // 输出配置
	output: {	
	// 输出文件名
    filename: 'bundle.js',	
	// 输出文件路径配置
    path: path.resolve(__dirname, 'dist')   
	}
};
```
* 5.2配置npm命令: package.json
```
"scripts": {
    "build": "webpack"
},
```
* 5.3打包应用
```
npm run build
```

### 6.打包css和图片文件
* 6.1安装样式的loader
```
npm install css-loader style-loader --save-dev
npm install file-loader url-loader --save-dev
补充: url-loader是对象file-loader的上层封装，使用时需配合file-loader使用。
```
* 6.2配置loader
```
module: {
    rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
                loader: 'url-loader',
                options: {   
                limit: 8192      
              }
            }
          ]
    	}
    ]
}
```
* 6.3向应用中添加2张图片:
    * 小图: img/small.png	// 小于8KB以Base64打包至Js
    * 大图: img/big.jpg		// 大于8KB
    
* 6.4创建样式文件: src/css/test.css
```
body {
    background: url('../img/samll.jpg')
}
```
* 6.5更新入口js : entry.js
  - import '../css/test.css'
* 6.6添加css样式
```
#box1{
    width: 300px;
    height: 300px;
    background-image: url("../image/logo.jpg");
}
#box2{
    width: 300px;
    height: 300px;
    background-image: url("../image/big.jpg");
}
```
* 6.7index.html添加元素
```  
<div id="box1"></div>
<div id="box2"></div>
```	
* 6.8执行打包命令：
`npm run build`
* 6.9发现问题：
	- 大图无法打包到entry.js文件中，index.html不在生成资源目录下
	- 页面加载图片会在所在目录位置查找，导致页面加载图片时候大图路径无法找到
* 解决办法：
	- `publicPath : 'dist/js/',` //设置为index.html提供资源的路径,设置完后找所有的资源都会去当前目录下找。
	- 将index.html放在dist/js/也可以解决
### 7.自动编译打包
* 7.1利用webpack开发服务器工具: webpack-dev-server
* 7.2安装webpack-dev-server
    - `npm install --save-dev webpack-dev-server`
* 7.3webpack配置
```
devServer: {
    contentBase: './dist'
},
```
* 7.4package配置
    - `"start": "webpack-dev-server --open"`
* 7.5编译打包应用并运行
    - `npm start`
### 8.使用webpack插件
* 8.1常用的插件
	- 使用`html-webpack-plugin`根据模板html生成引入script的页面
    - 使用`clean-webpack-plugin`清除dist文件夹
    - 使用`uglifyjs-webpack-plugin`压缩打包的js文件
* 8.2安装  
`npm install --save-dev  html-webpack-plugin clean-webpack-plugin`
* 8.3webpack配置
```
//自动生成html文件的插件
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
//清除之前打包的文件 
const CleanWebpackPlugin = require('clean-webpack-plugin');   
plugins: [
    new HtmlWebpackPlugin({template: './index.html'}),
    new CleanWebpackPlugin(['dist'])
]
```
* 8.4创建页面: index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>webpack test</title>
</head>
<body>
<div id="app"></div>
    <!--打包文件将自动通过script标签注入到此处-->
</body>
</html>
```
* 8.5打包运行项目
```
npm run build
npm start
```
		
	  