## Bootstrap  
### 1、容器
+ 流体容器:width 为 `auto`
+ 固定容器
  
|     阈值 Y     |     width W     |
| -------------- | --------------- |
| 768 > Y        | xs -->auto      |
| 768 < Y < 992  | sm -->720+槽宽  |
| 992 < Y < 1200 | md -->940+槽宽  |
| 1200 < Y       | lg -->1140+槽宽 |


+ 一行4图 -->`col-lg-3` 
+ 一行3图 -->`col-md-4`
+ 一行2图 -->`col-sm-6`

+ 栅格系统
### 2、栅格源码分析
+ 流体容器&固定容器 公共样式
	- `margin-right: auto;`
	- `margin-left: auto;`
	- `padding-left:  15px;`
	- `padding-right: 15px;`	
	
+ 固定容器 特定样式
	- 顺序不可变
  
  	```
	@media (min-width: @screen-sm-min) {
		width: @container-sm;
	}
	@media (min-width: @screen-md-min) {
		width: @container-md;
	}
	@media (min-width: @screen-lg-min) {
		width: @container-lg;
	}
	```
+ 行
	- `margin-left: -15px;`
	- `margin-right: -15px;`
+ 列

	```
	第一步:
	.make-grid-columns()--->
		.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1,
		.col-xs-2, .col-sm-2, .col-md-2, .col-lg-2,
		...
		.col-xs-12, .col-sm-12, .col-md-12, .col-lg-12{
			position: relative;
			min-height: 1px;
			padding-left: 15px;
			padding-right: 15px;
		}
	```
	``` 
	第二步:   
	.make-grid(xs)--->
		float-grid-columns(@class);
  			.col-xs-1,
			.col-xs-2,
			.col-xs-3,
			.col-xs-4,
			...
			col-xs-12{
  				float: left;
  		}
		.loop-grid-columns(@grid-columns, @class, width);
  			.col-xs-12{
  				width:12/12;
  			}	
			.col-xs-11{
  				width:11/12;
  			}
  			...
  			.col-xs-1{
  				width:1/12;
			} 
		.loop-grid-columns(@grid-columns, @class, pull);
		.loop-grid-columns(@grid-columns, @class, push);
			push:                  pull:
  			.col-xs-push-12{         .col-xs-pull-12{      
  				left:12/12;              right:12/12;
			}                        }
  			.col-xs-push-11{
  				left:11/12;
  			}
  			...                      ...
			.col-xs-push-1{
				left:1/12;
			} 
			.col-xs-push-0{           .col-xs-pull-0{
				left:auto;               right:auto;
			}                         }
	第三步:			 
		.loop-grid-columns(@grid-columns, @class, offset);
	```			  		
### 3、响应式工具
	
### 4、栅格盒模型设计的精妙之处
+ 容器两边具有15px的padding	、
	- 行  两边具有-15px的margin	
	- 列  两边具有15px的padding
	
+ 为了维护槽宽的规则，
	- 列两边必须得要15px的padding
	- 为了能使列嵌套行
		* 行两边必须要有-15px的margin
	- 为了让容器可以包裹住行
        * 容器两边必须要有15px的padding