## Js相关知识点，
### 关于this：
*   ☞ 指的是调用当前方法 / 函数 的那个对象
                        
        function fn1 () {							
            this;
        }
        fn1();	// this => window
 
        oDiv.onclick = fn1;	  // this => oDiv，事件调用不加 ();
        
        oDiv.onclick = function () {
        	fn1();	// fn1() 里的this => window
        }
+   1.以【函数的形式】调用时，[this永远都是window]()。比如fun();相当于window.fun();
+   2.以【方法的形式】调用时，[this是调用方法的那个对象]()
+   3.以【构造函数的形式】调用时，[this是新创建的那个对象]()
+   4.以【使用call和apply】调用时，[this是指定的那个对象]()

### 关于函数返回值：
*   ☞ 函数名+括号： fn1() ==> return 后面的的值，函数返回值
*   ☞ 仅仅 是函数名调用：fn1 ==>函数体对象为参数，即整个函数代码
*   ☞ 所有函数默认返回值：未定义
*   ☞ return 之后任何代码都不执行

### 关于定时器：
*   ☞ var timer = setInterval(函数名， 毫秒);
    -   clearInterval(timer);	// 重复执行
    -   clearTimout(timer);	// 执行一次

### 关于OOP：
*   特点：
    -   ☞ 抽象：抓问题核心
   -    ☞ 封装：不考虑内部实现原理，只考虑功能使用
   -    ☞ 继承：从已有对象，继承出新的对象，多重继承，多态
*   组成：
    -   ☞ 方法：函数(过程、动态的)
    -   ☞ 属性：变量(状态、静态的)
              
            function People (name) {		// 构造			
                this.name = name;		//  属性
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
*   ☞search：
    -   `i` -- 忽略大小写，返回出现的位置
*   ☞match、replace：
    -   `\d、\d\d、\d+、g` -- 获取匹配 / 替换的项目
*   ☞`[abc]`， 匹配任意字符 `/1[abc]2/`
    -   范围：`[a-z]、[0-9]、[^a]` 
*   ☞转义字符：
    -   `.` （点）-- 任意字符 	`/<[^<>]+>/g`
    -   `\d、\w 等价于 [a-z0-9_]、\s` 
    -   `\D 等价于 [^0-9]、\W 等价于 [^a-z0-9_]、\S`
*   ☞量词(出现的次数)或者说是位数：
    -   `{n,m}` -- 至少n次， 至多m次
    -   `{n, }` -- 至少n次，至多不限
    -   `{,m}` -- 至少不限， 至多m次
    -   `{n}` -- 正好n次
    -   `*` -- {0,}，任意次
    -   `+` -- {1,}，一次或任意次
    -   `?` -- {0,1}，零次或一次
*   例子：
    -   `^ --行首，$ --行尾`
    -   `/^\w+@[a-z0-9]+\.[a-z]{2,4}$/` -- 邮箱验证
    -   `/^\s*|\s*$/` -- 去掉首尾Space
    -   `/[\u4e00-\u9fa5]/` -- 匹配中文

### 关于 DOM 对像.属性 操作的各种尺寸宽高：  
*   ☞ **offset**
    -  `offsetWidth[Height]`   --> 元素(盒子)的 [宽高+padding+borde]() 
    -  `offsetLeft[Top]`   --> 元素(盒子)的[父级带有定位属性，左侧(顶部)距离数字]()，**从父亲的 padding 开始算，父亲的 border 不算**；若没有定位，则以body为准  
*   ☞ **offsetParent**
    - 带有定位的父级元素节点，若[没有定位，返回结果为body]()；若有[返回最近的父级元素]()  
	- 本身定位为`fixed`
		* offsetParent:null (非火狐)
		* offsetParent:body（火狐）
	- 本身定位不为`fixed`
		* 父级没有定位：offsetParent:body
		* 父级有定位：offsetParent:定位父级
*   ☞ **scroll**  
    - `scrollWidth[Height]` --> 元素(盒子)的宽高，[不包括border+margin]()，`scrollWidth[Height]=width[Height]+padding`  
    > scrollHeight有一个特点：如果文字超出了盒子，高度为内容的高（包括超出的内容）；不超出，则是盒子本身高度。
    - `scrollTop[Left]` --> 网页被卷去的头部与左部的距离，[兼容写法：]() `window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop`
*   ☞ **client**  
    -   `clientWidth[Height]`   --> 元素(盒子)的宽高，[padding + width[height]]()，调用body / html 为获取网页可视区的宽高
    -   `clientX[]Y]`   --> 鼠标距离可视区[左侧  /   上侧的距离]()
    -   `clientTop[Left]`   --> 元素(盒子)的[上   /   左border]()
*   ☞ 总结：  
    -  区别1：宽高
        
            offsetWidth = width + padding + border  //  占位宽
            offsetHeight = height + padding + border     //  占位高

            scrollWidth = 内容宽度（不包含border）   //  内容宽
            scrollHeight = 内容高度（不包含border）  // 内容高

            clientWidth = width + padding   //  可视区宽
            clientHeight = height + padding //  可视区高

    -   区别2：上左  

            offsetTop/offsetLeft：
            调用者：任意元素。(盒子为主)
            作用：距离父系盒子中带有定位的距离。

            scrollTop/scrollLeft：
            调用者：document.body.scrollTop（window调用）(盒子也可以调用，但必须有滚动条)
            作用：浏览器无法显示的部分（被卷去的部分）。

            clientY/clientX：
            调用者：event   // 重要
            作用：鼠标距离浏览器可视区域的距离（左、上）。
### 获取元素的样式：
* currentStyle -->该属性获取当前元素的样式，只有IE支持
  - box1.currentStyle.width
* getComputerStyle() -->该方法获取当前元素样式，
  - getComputerStyle((box1, null).width);
* [参看 {}、[]、()区别](https://blog.csdn.net/qq_20069429/article/details/83267887)
* `{}` -->表示对象;`[]`-->表示对象的属性、方法;`()`-->如果用在方法名后面

```
function getStyle(obj, attr) {
    return obj.currentStyle?obj.currentStyle[attr]:obj.getComputerStyle[attr];
}
showMsg.innerHTML = "x = "+x + ", y = "+y; // x, 均为变量
```














