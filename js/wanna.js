var point=0;
window.onload=function(){
	var buhao = document.getElementById("buhao");
	var hao = document.getElementById("hao");
	buhao.onclick=function(){
		point++;
		if(point==1){
		   	alert("不喜欢我嘛？");
		   	window.location.href="end.html";
		  		point=1;
	  }
         }
}