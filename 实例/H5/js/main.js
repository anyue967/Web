window.onload = function() {
	// 获取DOM 
	var arrowEl = document.querySelector(".arrow");
	var liNodes = document.querySelectorAll(".nav > .list > li");
	var upNodes = document.querySelectorAll("#head .headMain > .nav .list > li .up");
	var firstLiNode = liNodes[0];
	var firstUpNode = firstLiNode.querySelector(".up");
	
	var head = document.querySelector("#head");
	var content = document.querySelector("#content");
	var cLiNodes = document.querySelectorAll("#content .list > li");
	var cList = document.querySelector("#content .list");
	var now = 0;
	// offsetLeft -->元素偏移距离
	// offsetWidth -->占位宽
	// scrollWidth -->内容宽
	// clientWidth -->鼠标位置
	
	// 头部交互
	headBind();
	function headBind() {
		firstUpNode.style.width = "100%";
		arrowEl.style.left = firstLiNode.offsetLeft + firstLiNode.offsetWidth/2 - arrowEl.offsetWidth/2 + "px";
		for(var i = 0; i< liNodes.length; i++) {
			// 转绑很重要
			liNodes[i].index = i;
			liNodes[i].onclick = function() {
				// i:liNodes.length 5 
				// this -->liNodes
				// move() -->this 是 window
				move(this.index); 
				now = this.index;
			}
		}
		function move(index) {
			for(var i = 0; i<upNodes.length;i++){
				// 同步执行
				upNodes[i].style.width="";
			}
			// 异步执行
			upNodes[index].style.width = "100%";
			arrowEl.style.left = liNodes[index].offsetLeft + liNodes[index].offsetWidth/2 - arrowEl.offsetWidth/2 + "px";
			cList.style.top = -index*(document.documentElement.clientHeight - head.offsetHeight) + 'px';
		}
	};
	window.onresize = function() {
		contentBind();
		cList.style.top = -now*(document.documentElement.clientHeight - head.offsetHeight) + 'px';
	}
	// 内容交互
	contentBind();
	function contentBind() {
		content.style.height = document.documentElement.clientHeight - head.offsetHeight + 'px';
		for(var i = 0; i < cLiNodes.length; i++){
			cLiNodes[i].style.height = document.documentElement.clientHeight - head.offsetHeight + 'px';
		}
	};
}