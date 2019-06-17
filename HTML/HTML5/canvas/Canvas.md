### 1、canvas基本用法
+ 什么是canvas(画布)
    >`<canvas>` 是 **HTML5** 新增的元素，可用于通过使用**JavaScript**中的脚本来绘制图形例如，它可以用于绘制图形，创建动画。`<canvas>` 最早由Apple引入WebKit可以使用`<canvas>`标签来定义一个canvas元素使用`<canvas>`标签时，建议要成对出现，不要使用闭合的形式。canvas元素默认具有高宽`width:300px;height:150px`
		
+ 替换内容
    > `<canvas>`很容易定义一些替代内容。由于某些较老的浏览器（尤其是IE9之前的IE浏览器）不支持HTML元素"canvas"，但在这些浏览器上应该要给用户展示些替代内容。这非常简单：我们只需要在`<canvas>`标签中提供替换内容就可以。支持的浏览器将会忽略在容器中包含的内容，并且只是正常渲染canvas。不支持的浏览器会显示代替内容

+ canvas标签的两个属性
	> `<canvas>` 看起来和 `<img>` 元素很相像，唯一的不同就是它并没有`src` 和``alt``属性。实际上，`<canvas>` 标签只有两个属性`width` 和`height`。当没有设置宽度和高度的时候，canvas会初始化宽度为300像素和高度为150像素。画布的高宽html属性设置width height时只影响画布本身，不影画布内容css属性设置width height时不但会影响画布本身的高宽，还会使画布中的内容等比例缩放（缩放参照于画布默认的尺寸）

+ 渲染上下文
    > `<canvas>`元素只是**创建固定大小的画布**，绘制内容，需要找到它的渲染上下文`<canvas>`元素有一个叫做 `getContext()` 的方法，这个方法是用来获得渲染上下文和它的绘画功能。`getContext()`只有一个参数，上下文的格式获取方式

	```
	var canvas = document.getElementById('box');
	var ctx = canvas.getContext('2d');
					
	// 检查支持性
	var canvas = document.getElementById('tutorial');
	if (canvas.getContext){
		var ctx = canvas.getContext('2d');
	} 
	```

### 2、canvas绘制矩形
> HTML中的元素canvas只支持一种原生的图形绘制：矩形。所有其他的图形的绘制都至少需要生成一条路径

+ 绘制矩形:
  - canvas提供了三种方法绘制矩形：
	* 绘制一个**填充的矩形**（填充色默认为黑色）
		- `fillRect(x, y, width, height)`
	* 绘制一个**矩形的边框**（默认边框为:一像素实心黑色）
		- `strokeRect(x, y, width, height)`
	* 清除指定**矩形区域**，让清除部分完全透明。	
		- `clearRect(x, y, width, height)`
				
> x与y指定了在canvas画布上所绘制的矩形的左上角（相对于原点）的坐标。width和height设置矩形的尺寸。（存在边框的话，边框会在width上占据一个边框的宽度，height同理）
	
  - strokeRect时，边框像素渲染问题
	按理渲染出的边框应该是1px的，canvas在渲染矩形边框时，边框宽度是平均分在偏移位置的两侧。  
	`context.strokeRect(10,10,50,50)`:边框会渲染在10.5 和 9.5之间,浏览器是不会让一个像素只用自己的一半的相当于边框会渲染在9到11之间  
	`context.strokeRect(10.5,10.5,50,50)`:边框会渲染在10到11之间  
	
  - 添加样式和颜色
	`fillStyle`:设置图形的填充颜色。  
	`strokeStyle`:设置图形轮廓的颜色。  
	`lineWidth`:这个属性设置当前绘线的粗细。属性值必须为正数。
			
  - lineWidth & 覆盖渲染  
	
  - lineJoin
	* round : 圆角  
	* bevel : 斜角  
	* miter : 直角(默认)  
### 3、canvas绘制路径
+ 图形的基本元素是**路径**。路径是通过不同颜色和宽度的线段或曲线相连形成的不同形状的点的集合。
	
### 4、步骤
+ 首先，你需要创建路径**起始点**。
+ 然后你使用画图命令去画出路径
+ 之后你把路径封闭。
+ 一旦路径生成，你就能通过描边或填充路径区域来渲染图形。
	
### 5、绘制三角形
+ beginPath()
  - 新建一条路径，生成之后，图形绘制命令被指向到路径上准备生成路径。
  - 生成路径的第一步叫做`beginPath()`本质上，路径是由很多子路径构成，这些子路径都是在一个列表中，
  - 所有的子路径（线、弧形、等等）构成图形,而每次这个方法调用之后，列表清空重置，然后我们就可以重新绘制新的图形。
	
+ moveTo(x, y)
  - 将笔触移动到指定的**坐标** `x`以及 `y`上
  - 当canvas初始化或者beginPath()调用后，通常会使用`moveTo()`函数**设置起点**
		
+ lineTo(x, y)
  - 将笔触移动到指定的坐标x以及y上
  - 绘制一条从当前位置到指定x以及y位置的直线。
	
+ closePath()
  - 闭合路径之后图形绘制命令又重新指向到上下文中。
  - 闭合路径`closePath()`,不是必需的。这个方法会通过绘制一条从当前点到开始点的直线来闭合图形。
  - 如果图形是已经闭合了的，即当前点为开始点，该函数什么也不做
  - 当调用`fill()`函数时，所有没有闭合的形状都会自动闭合，所以不需要调用`closePath()函数`。但是调用`stroke()`时不会自动闭合
		
+ stroke()
  - 通过线条来**绘制图形轮廓**
  - 不会自动调用`closePath()`
		
+ fill()
  - 通过填充路径的内容区域生成实心的图形。
  - 自动调用closePath()
				
### 6、lineCap
+ lineCap 是 Canvas 2D API 指定如何**绘制每一条线段末端**的属性。
	- butt  :线段末端以方形结束，默认值
    - round :线段末端以圆形结束
	- square:线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域
		
### 7、save & restore
+ `save()`是 Canvas 2D API 通过将**当前状态放入栈**中，保存 canvas 全部状态的方法
+ `restore()` 是 Canvas 2D API 通过在绘图状态栈中弹出顶端的状态，将 canvas 恢复到最近的保存状态的方法,如果没有保存状态，此方法不做任何改变。	

### 8、角度与弧度的Js表达式:`radians=degrees*(Math.PI/180)`
+ canvas绘制圆形
  - `arc(x, y, radius, startAngle, endAngle, anticlockwise)`
	* `x,y`为绘制圆弧所在圆上的圆心坐标
	* `radius`为半径
	* `startAngle`以及`endAngle`参数用弧度定义了开始以及结束的弧度。这些都是以x轴为基准
	* `anticlockwise` 为一个布尔值。为true时，是逆时针方向，否则顺时针方向。
+ arcTo
  - `arcTo(x1, y1, x2, y2, radius)`
	* 根据给定的控制点和半径画一段圆弧
	* 肯定会从(x1 y1),但不一定经过(x2 y2);(x2 y2)只是控制一个方向
	* 
### 9、二次贝塞尔
+ `quadraticCurveTo(cp1x, cp1y, x, y)`
  - 绘制**二次贝塞尔曲线**，cp1x,cp1y为一个控制点，x,y为结束点。
  - 起始点为moveto时指定的点
		
### 10、三次贝塞尔
+ `bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)`
  - 绘制**三次贝塞尔曲线**，cp1x,cp1y为控制点一，cp2x,cp2y为控制点二，x,y为结束点。
  - 起始点为moveto时指定的点	
  	
### 11、canvas中的变换
+ translate(x, y)
  - `translate(x,y)` 
	* 用来移动 canvas 原点到一个不同的位置, x 是左右偏移量，y 是上下偏移量，
  - `rotate(angle)`
	* 旋转的角度(angle)，顺时针方向的，以弧度为单位的值。
	* 旋转的中心点始终是 canvas 的原点，如果要改变它，需要用到 translate 方法
  - `scale(x, y)`
	* x,y 分别是横轴和纵轴的缩放因子，必须是正值。值比 1.0 小表示缩小，比 1.0 大则表示放大，值为 1.0 时什么效果都没有。
	* 缩放一般我们用它来增减图形在 canvas 中的像素数目，对形状，位图进行缩小或者放大。
  
### 12、在canvas中插入图片(需要image对象)
+ canvas操作图片时，必须要等图片加载完才能操作
+ `drawImage(image, x, y, width, height)`
  - 其中 image 是 image 或者 canvas 对象，x 和 y 是其在目标 canvas 里的起始坐标。
  - 这个方法多了2个参数：width 和 height，这两个参数用来控制 当像canvas画入时应该缩放的大小

### 13、在canvas中设置背景(需要image对象)
+ `createPattern(image, repetition)`
+ 一般情况下，将createPattern返回的对象作fillstyle的值
			
### 14、渐变
+ canvas渐变（线性渐变）
  - `createLinearGradient(x1, y1, x2, y2)`
	* 表示渐变的起点 (x1,y1) 与终点 (x2,y2)
  - `gradient.addColorStop(position, color)`
	* position 参数必须是一个 0.0 与 1.0 之间的数值，表示渐变中颜色所在的相对位置。0.5 表示颜色会出现在正中间。
	* color 参数必须是一个有效的 CSS 颜色值（如 #FFF， rgba(0,0,0,1)，等等）
  - canvas渐变（径向渐变）		
	* `createRadialGradient(x1, y1, r1, x2, y2, r2)`
	* 前三个参数则定义另一个以(x1,y1) 为原点，半径为 r1 的圆，
	* 后三个参数则定义另一个以 (x2,y2) 为原点，半径为 r2 的圆。
  
### 15、在canvas中绘制文本
+ canvas 提供了两种方法来渲染文本:
  - `fillText(text, x, y)`
	* 在指定的(x,y)位置填充指定的文本
  - `strokeText(text, x, y)`
	* 在指定的(x,y)位置绘制文本边框
			
### 16、文本样式
+ `font = value`
  - 默认的字体是 10px sans-serif。
  - font属性在指定时，必须要有大小和字体 缺一不可
+ `textAlign = value`
  - 文本对齐选项. 可选的值包括： left, right  center. 
+ `textBaseline = value`
  - top:文本基线在文本块的顶部。
  - middle:文本基线在文本块的中间。
  - bottom:文本基线在文本块的底部。

### 17、measureText
+ `measureText()` 方法返回一个 TextMetrics 对象，包含关于文本尺寸的信息（例如文本的宽度）
		
### 18、canvas中文本水平垂直居中

### 19、阴影(文本阴影&盒模型阴影)
+ `shadowOffsetX` 和 `shadowOffsetY` 用来设定阴影在 X 和 Y 轴的延伸距离，它们默认都为 0。
+ `shadowBlur` 用于设定阴影的模糊程度，其数值并不跟像素数量挂钩，也不受变换矩阵的影响，默认为 0。
+ `shadowColor` 是标准的 CSS 颜色值，用于设定阴影颜色效果，默认是全透明的黑色。
  
### 19、在canvas中的像素操作
> 事实上，可以直接通过ImageData对象操纵像素数据，直接读取或将数据数组写入该对象中
	
### 20、得到场景像素数据
+ `getImageData()`:获得一个包含画布场景像素数据的ImageData对像,它代表了画布区域的对象数据
	```
	ctx.getImageData(sx, sy, sw, sh)
		sx:将要被提取的图像数据矩形区域的左上角 x 坐标。
		sy:将要被提取的图像数据矩形区域的左上角 y 坐标。
		sw:将要被提取的图像数据矩形区域的宽度。
		sh:将要被提取的图像数据矩形区域的高度。
	```

### 21、ImageData对象
+ `ImageData`对象中存储着canvas对象真实的像素数据，它包含以下几个只读属性：
  - width:图片宽度，单位是像素
  - height:图片高度，单位是像素
  - data:Uint8ClampedArray类型的一维数组，
  - 包含着RGBA格式的整型数据，范围在0至255之间（包括255）
	* r:0 --> 255(黑色到白色)
	* g:0 --> 255(黑色到白色)
	* b:0 --> 255(黑色到白色)
	* a:0 --> 255(透明到不透明)
			
### 22、在场景中写入像素数据
+ `putImageData()`方法去对场景进行像素数据的写入。
+ putImageData(myImageData, dx, dy)
	* dx和dy参数表示在场景内左上角绘制的像素数据所得到的设备坐标
		
### 23、创建一个ImageData对象
+ `ctx.createImageData(width, height);`
  - width : ImageData 新对象的宽度。
  - height: ImageData 新对象的高度。
  - 默认创建出来的是透明的

### 24、操作单个像素（行与列）

### 25、马赛克

### 26、全局透明度的设置
+ `globalAlpha = value`
  - 属性影响到 canvas 里所有图形的透明度，
  - 有效的值范围是 0.0 （完全透明）到 1.0（完全不透明）,默认是 1.0
		
### 27、覆盖合成
+ `source`:新的图像(源)
+ `destination`:已经绘制过的图形(目标)
+ `globalCompositeOperation`
  - `source-over`(默认值):源在上面,新的图像层级比较高
  - `source-in`:只留下源与目标的重叠部分(源的那一部分)
  - `source-out`:只留下源超过目标的部分
  - `source-atop`:砍掉源溢出的部分
  - `destination-over`:目标在上面,旧的图像层级比较高
  - `destination-in`:只留下源与目标的重叠部分(目标的那一部分)
  - `destination-out`:只留下目标超过源的部分
  - `destination-atop`:砍掉目标溢出的部分
		
### 28、将画布导出为图像
+ `toDataURL`:(注意是canvas元素接口上的方法)
	
### 29、事件操作
+ `ctx.isPointInPath(x, y)`
  - 判断在当前路径中是否包含检测点
  - x:检测点的X坐标
  - y:检测点的Y坐标
  - 注意，此方法只作用于最新画出的canvas图像		
	
	
		
		

	
		
	
	
	
	
		
	
	
		
	
					
		
		
		
	