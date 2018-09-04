var oBj=document.getElementById("tab")
var oLis=oBj.getElementsByTagName("li")
var oDiv=oBj.getElementsByTagName("div")

	for(var i=0;i<oLis.length;i++){
		var oLi=oLis[i];
		oLi.app=i;
		oLi[j].onmouseover=function(){
			for(var j=0;j<oLis.lenght;j++){
				oLis[j].className="";
				oDiv[j].className="";
				
			}
			this.className="select";
			oDiv[this.app].className="select";	
		}
		
	}
