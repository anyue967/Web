## Js相关知识点
### 关于this：
* ☞ 指的是调用当前方法 / 函数 的那个对象
                        
        function fn1 () {							
		this	
        }
        fn1();	// this => window
 
        oDiv.onclick = fn1;	  // this => oDiv，事件调用
        
        oDiv.onclick = function () {
        	fn1();	// fn1() 里的this => window
        }

### 关于函数返回值：
* ☞ 函数名+括号： fn1() ==> return 后面的的值，函数返回值
* ☞ 所有函数默认返回值：未定义
* ☞ return 之后任何代码都不执行

### 关于定时器：
* ☞ var timer = setInterval(函数名， 毫秒);
  - clearInterval(timer);	// 重复执行
  - clearTimout(timer);	// 执行一次