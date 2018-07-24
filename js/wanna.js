var point=0;
window.onload=function(){
	var buhao = document.getElementById("buhao");
	var hao = document.getElementById("hao");
	buhao.onclick=function(){
		point++;
		if(point==1){
	   			alert("小姐姐在考虑一下呗");
	   }else if(point==2){
		   		alert("你是我见过的最温柔可爱善良体贴的的女孩");
	   }else if(point==3){
		   		alert("一生一世只爱你一人");
	   }else if(point==4){
		   		alert("遇见你不容易，错过你会很可惜");
		   		
	  }else if(point==5){
		   		alert("你眼里有春和秋，胜过我见过的一切山川河流");
	  }else if(point==6){
		   		alert("有你的将来才叫余生，其他的只是以后");
	  }else if(point==7){
		   	alert("你是我一生遇见一次的惊喜");
		   	else if(point==8){
		   	alert("还是不喜欢我嘛？");
		   	}
		   	window.location.href="end.html";
		  		point=1;
	  }
         }
}