## Web

### float:
+ ☞ 脱离正常文档流，原位置不存在，属性值：left/right/none/
+ ☞ 使块元素在一行显示，使内联支持宽高，默认内容撑开宽度

+ 清除浮动：
    - ☞ 给**父级元素**加 浮动
    - ☞ **父级元素** 加display:inline-block
    - ☞ 给浮动元素父级加：
      {zoom:1;}  
      .clear:after{content: "";display: block;clear: both;}
    - ☞ 给浮动元素的 父级 加  overflow 一定配合zoom:1;
    - ☞ 在IE6，7下父级有宽度就不用清浮动;
    - ☞ 给父级元素加**position:fixed/absolute;**

### position 脱离正常文档流，属性值分为以下情况：
+ fix: 相对于浏览器窗口进行定位

+ relative: 不使元素脱离文档流，原位置存在，不影响元素本身特性，**相对直接父级进行定位/相对与原先的位置进行定位**；

+ 注：默认定位后来者层级高于前者

+ absolute: 脱离文档流，原位置不存在，**相对于父级(具有relative/absolute)的元素进行定位**，**若不存在，则相对body进行定位**
    - 使内嵌支持宽高，块属性标签内容撑开宽度

+ 以上可通过z-index进行层次分级，用'left\top\right\bottom'进行规定

### display 属性值：block/inlinle/inline-block

### 再提 块标签与内联标签：
+ 块标签：
  - ☞ 默认独占一行 
  - ☞ 没有宽度时，默认撑满一排
  - ☞ 支持所有css命令
+ 内联标签：
  - ☞ 同排可以继续跟同类的标签
  - ☞ 内容撑开宽度
  - ☞ 不支持宽高
  - ☞ 不支持上下的margin和padding
  - ☞ 代码换行被解析



