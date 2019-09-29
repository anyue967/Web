/**
 * JSON：
 * var obj = {a:15, b:4, c:8};
 * for(i in obj){alert(i + '=' +obj[i])};
 * 
 * 数组： 
 * var arr = [15, 4, 8];
 * for(i=0; i<arr.length; i++){alert(i + '=' +arr[i])};
 * for(i in arr){alert(i + '=' +arr[i])};
 */
function getStyle(obj, attr) {
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj, false)[attr];
/*	取属性值
	if (obj.currentStyle) {
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj, false)[attr];
	}*/
/*
function getStyle(obj, name) {

	if(window.getComputedStyle) {
		//正常浏览器的方式，具有getComputedStyle()方法
		return getComputedStyle(obj, null)[name];
	} else {
		//IE8的方式，没有getComputedStyle()方法
		return obj.currentStyle[name];
	}*/

}

function move(obj, json, fn) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function () {
		var bStop = true;	
		for (var attr in json) {
			// 取当前的值
			var iCur = 0;
			if (attr == 'opacity') {
				iCur = parseInt(parseFloat(getStyle(obj, attr))*100);
			}else{
				iCur = parseInt(getStyle(obj, attr));
			}
			// 计算差值即速度
			var iSpeed = (json[attr] - iCur) / 8;
			iSpeed = iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
			// 检测停止
			if(iCur != json[attr]) {
				bStop = false;
			}
			
			if (attr == 'opacity') {
				obj.style.filter = 'alpha(opacity:'+(iCur + iSpeed)+')';
				obj.style.opacity = (iCur + iSpeed) / 100;
			}else{
				obj.style[attr] = iCur + iSpeed + 'px';
			}
			
		}
		if (bStop) {
			clearInterval(obj.timer)
			if (fn) {
				fn();
			}
		}
	}, 30);
}