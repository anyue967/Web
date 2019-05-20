## Js相关知识点，
### 关于this：
* ☞ 指的是调用当前方法 / 函数 的那个对象
                        
        function fn1 () {							
	       this	;
        }
        fn1();	// this => window
 
        oDiv.onclick = fn1;	  // this => oDiv，事件调用不加 ();
        
        oDiv.onclick = function () {
        	fn1();	// fn1() 里的this => window
        }
+ 1.以【函数的形式】调用时，[this永远都是window]()。比如fun();相当于window.fun();
+ 2.以【方法的形式】调用时，[this是调用方法的那个对象]()
+ 3.以【构造函数的形式】调用时，[this是新创建的那个对象]()
+ 4.以【使用call和apply】调用时，[this是指定的那个对象]()

### 关于函数返回值：
* ☞ 函数名+括号： fn1() ==> return 后面的的值，函数返回值
* ☞ 所有函数默认返回值：未定义
* ☞ return 之后任何代码都不执行

### 关于定时器：
* ☞ var timer = setInterval(函数名， 毫秒);
  - clearInterval(timer);	// 重复执行
  - clearTimout(timer);	// 执行一次

### 关于OOP：
* 特点：
   - ☞ 抽象：抓问题核心
   - ☞ 封装：不考虑内部实现原理，只考虑功能使用
   - ☞ 继承：从已有对象，继承出新的对象，多重继承，多态
* 组成：
   - ☞ 方法：函数(过程、动态的)
   - ☞ 属性：变量(状态、静态的)
              
			function People (name) {		// 构造			
				this.name = name;		/  属性
				this.showName = showName;
			}							
			function showName () {		// 方法
				alert(this.name);
			}
			var p1 = new People('Jhon');
			p1.showName();
			=========================================
			function People (name) {
				this.name = name;
			}							
			People.prototype.showName = function () {
				alert(this.name);
			}
			var p1 = new People('Jhon');
			p1.showName();

### 关于正则(规则)：
* ☞ search：
  - `i` -- 忽略大小写，返回出现的位置
* ☞ match、replace：
  - `\d、\d\d、\d+、g` -- 获取匹配 / 替换的项目
* ☞ `[abc]`， 匹配任意字符 `/1[abc]2/`
  - 范围：`[a-z]、[0-9]、[^a]` 
* ☞ 转义字符：
  - `.` （点）-- 任意字符 	`/<[^<>]+>/g`
  - `\d、\w 等价于 [a-z0-9_]、\s` 
  - `\D 等价于 [^0-9]、\W 等价于 [^a-z0-9_]、\S`
* ☞ 量词(出现的次数)或者说是位数：
  - `{n,m}` -- 至少n次， 至多m次
  - `{n, }` -- 至少n次，至多不限
  - `{,m}` -- 至少不限， 至多m次
  - `{n}` -- 正好n次
  - `*` -- {0,}，任意次
  - `+` -- {1,}，一次或任意次
  - `?` -- {0,1}，零次或一次
* 例子：
  - `^ --行首，$ --行尾`
  - `/^\w+@[a-z0-9]+\.[a-z]{2,4}$/` -- 邮箱验证
  - `/^\s*|\s*$/` -- 去掉首尾Space
  - `/[\u4e00-\u9fa5]/` -- 匹配中文