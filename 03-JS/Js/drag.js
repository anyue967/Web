 // 拖拽：实现拖拽，元素首先要脱离正常文档流
function Drag(obj) {
    obj.onmousedown = function(ev) {
        // onmousedown 选择元素
        // clientX[Y] --> 鼠标距可视区的距离
        // offsetLeft[Top] --> 文档距可视区的距离
        var ev = ev || event;
        // 获取鼠标的位置
        var disX = ev.clientX - this.offsetLeft;
        var disY = ev.clientY - this.offsetTop;
        if(obj.releaseCapture){
            obj.releaseCapture();
        }

        document.onmousemove = function(ev) {
            // onmouseover 移动元素
            var ev = ev || event;
            var L = ev.clientX - disX;
            var T = ev.clientY - disY;

            if(L < 0){
                L = 0;
            } else if(L > document.documentElement.clientWidth - obj.offsetWidth){
                L = document.documentElement.clientWidth - obj.offsetWidth;
            }
            if(T < 0){
                T = 0;
            } else if(T > document.documentElement.clientHeight - obj.offsetHeight){
                T = document.documentElement.clientHeight - obj.offsetHeight;
            }
            // obj.style.left = ev.clientX - disX + 'px';
            // obj.style.top = ev.clientY - disY + 'px';
            obj.style.left = L + 'px';
            obj.style.top = T + 'px';
        };
        document.onmouseup = function() {
            // onmouseup   释放元素
            document.onmousemove = document.onmouseup= null;
            // 释放全局捕获
            if(obj.releaseCapture){
                obj.releaseCapture();
            }
            // obj.releaseCapture && obj.releaseCapture();
        };
        return false;
    };
}