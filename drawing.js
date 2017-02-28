var v = getElementById("vimage");

var drawDot = function(e){
	var dot = document.createElementNS("http://www.w3.org/2000/svg","circle");
	dot.setAttribute("cx", e.offsetX);
	dot.setAttribute("cy", e.offsetY);
	dot.setAttribute("r", "50");
	dot.setAttribute("fill", "red");
	}

v.addEventListener("click", drawDot);
