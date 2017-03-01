var v = document.getElementById("vimage");
var x1 = -1;
var y1 = -1;

var drawDot = function(e){
	var dot = document.createElementNS("http://www.w3.org/2000/svg","circle");
	dot.setAttribute("cx", e.offsetX);
	dot.setAttribute("cy", e.offsetY);
	dot.setAttribute("r", "25");
	dot.setAttribute("fill", "red");
	v.appendChild(dot);
}
	
var connectDots = function(e){
	var line = document.createElementNS("http://www.w3.org/2000/svg","line");
	line.setAttribute("x1", x1);
	line.setAttribute("y1", y1);
	line.setAttribute("x2", e.offsetX);
	line.setAttribute("y2", e.offsetY);
	line.setAttribute("stroke", "black");
	v.appendChild(line);
}

v.addEventListener("click", function(e){
	drawDot(e);
	if (x1 != -1)
		connectDots(e);
	x1 = e.offsetX;
	y1 = e.offsetY;
});

var clear = document.getElementById("clear");
clear.addEventListener("click", function(e){
	while (v.lastChild)
		v.removeChild(v.lastChild);
	x1 = -1;
	y1 = -1;
});