# Web

## float 脱离正常文档流，原位置不存在，属性值：left/right

## position 脱离正常文档流，属性值分为以下情况：
+ fix: 相对于浏览器窗口进行定位
+ relative: 脱离文档流，原位置存在，相对直接父级进行定位；
+ absolute: 脱离文档流，原位置不存在，相对于父级(具有relative/absolute)的元素进行定位，若不存在，则相对body进行定位
+ 以上可通过z-index进行层次分级，用'left\top\right\bottom'进行规定
## display 属性值：block/inlin5e/inline-block
