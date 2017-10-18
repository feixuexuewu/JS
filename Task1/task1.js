var div = document.getElementsByClassName("box");
var colors=['red','plum','blue','green','cyan','black','pink','gray','brown'];
var clock;
start.onclick=function(){
	clearInterval(clock);
	clock=setInterval(function(){
		timestart();
	},1000)
}
end.onclick=function(){
	for(i=0;i<div.length;i++){
		div[i].style.background="#FFA600";
	}
	clearInterval(clock);
}
function timestart(){
	for(var i=0;i<div.length;i++){
		div[i].style.background="#FFA600";
	}
	var arr=new Array(3);
	var arr1=new Array(3);
	//随机小格子
	for(var i=0;i<arr.length;i++){
		var a=parseInt(Math.random()*9); 
		console.log(a);
		if(i==0){
			arr[i]=a;
		}else{
			for(var j=0;j<i;j++){
				if(a==arr[j]){
					i--
				}else{
					arr[i]=a;
				}
			}
		}
	}
	//随机颜色
	for(var i=0;i<arr1.length;i++){
		var a=parseInt(Math.random()*9); 
		if(i==0){
			arr1[i]=a;
		}else{
			for(var j=0;j<i;j++){
				if(a==arr1[j]){
					i--
				}else{
					arr1[i]=a;
				}
			}
		}
	}
	for(var i=0;i<arr.length;i++){
		div[arr[i]].style.background=colors[arr1[i]];
	}
}
