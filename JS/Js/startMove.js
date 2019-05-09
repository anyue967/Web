function getStyle(obj, name){
    return obj.currentStyle?obj.currentStyle[name]:getComputedStyle(obj, false)[name];

/*    if (obj.currentStyle) {
        return obj.currentStyle;
    }else{
        return getComputedStyle(obj, false)[name];
    }*/
};

/*move(this, {left: 500, top: 300, opacity: 10}, {time: 1500, type: 'buffer', end: function(){
    alert(1);
}});*/
function startMove(obj, json, options){

    options=options||{};
    options.type=options.type||'buffer';
    options.time=options.time||700;
    
    var count=parseInt(options.time/30);
    var n=0;
    
    var start={};
    var dis={};
    
    for(var name in json){
        if(name=='opacity'){
            start[name]=Math.round(parseFloat(getStyle(obj, name))*100);
        }else{
            start[name]=parseInt(getStyle(obj, name));
        };
        dis[name]=json[name]-start[name];
    };
    
    clearInterval(obj.timer);
    obj.timer=setInterval(function (){
        n++;
        
        for(var name in json){
            switch(options.type){
                case 'linear':        //匀速
                    var cur=start[name]+dis[name]*n/count;
                    break;
                case 'buffer':        //缓冲
                    var a=1-n/count;
                    var cur=start[name]+dis[name]*(1-a*a*a);
                    break;
                case 'ease-in':        //加速
                    var a=n/count;
                    var cur=start[name]+dis[name]*(a*a*a);
                    break;
            };
            
            if(name=='opacity'){
                obj.style.filter='alpha(opacity:'+cur+')';
                obj.style.opacity=cur/100;
            }else{
                obj.style[name]=cur+'px';
            };
        };
        
        if(n==count){
            clearInterval(obj.timer);
            options.end && options.end();

/*            if (options.end) {
                options.end();
            }*/
        };
    }, 30);
}