function getByClass(clsName,parent){
	var oParent=parent?document.getElementById(parent):document,
	eles=[];
	//取出所有的标签元素
	elements=oParent.getElementsByTagName('*');
	//遍历标签元素
	for (var i = 0,l=elements.length;i<l;i++){
		if (elements[i].className==clsName) {
			eles.push(elements[i]);
		}
	}
	return eles;
}
window.onload=drags;
function drags(){
	var oTitle=getByClass('login_logo_webqq','loginPanel')[0];
	oTitle.onmousedown=fnDown;
}
function fnDown(event){
	event=event||window.event;
	var oDrag=document.getElementById("loginPanel");
		//光标按下时，距离拖动框的距离等于光标的位置减去拖动框距离页面的距离
		disX=event.clientX-oDrag.offsetLeft;
		disY=event.clientY-oDrag.offsetTop;

	//当鼠标指针在元素内部移动时重复的触发
	document.onmousemove=function(event){
		event=event||window.event;
		fnMove(event,disX,disY);
	}
	document.onmouseup=function(){
		document.onmousemove=null;
		document.onmouseup=null;
	}
}
function fnMove(e,disX,disY){
	var oDrag=document.getElementById("loginPanel");
		l=e.clientX-disX;
		t=e.clientY-disY;
		winW=document.documentElement.clientWidth||document.body.clientWidth;
		winH=document.documentElement.clientHeight||document.body.clientHeight;
		maxW=winW-oDrag.offsetWidth;
		maxH=winH-oDrag.offsetHeight;
	if (l<0) {
		l=0;
	}else if(l>maxW){
		l=maxW;
	}
	if(t<0){
		t=0;
	}else if(t>maxH){
		t=maxH;
	}
	oDrag.style.left=l+'px';
	oDrag.style.top=t+'px';

}