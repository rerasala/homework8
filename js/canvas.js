// Variables!
var radius = 5;
var x = 50;
var y =150;

var canvas = document.querySelector("#canvas")
var ctx = canvas.getContext("2d");
var colorPicker = document.querySelector("input");

// I would add more variables for x, y, radius, and color
var color = colorPicker.value;
var drawTrue = true;

//Listeners!!
//Add a listener for loading the window

window.addEventListener("resize", function() {
	ctx.canvas.width  = (window.innerWidth) * 0.75;
  	ctx.canvas.height = (window.innerHeight) * 0.75;
});

window.onload = function() {
	color = "red";
	ctx.canvas.width  = (window.innerWidth) * 0.75;
  	ctx.canvas.height = (window.innerHeight) * 0.75;
};

//Add a listener for the color picker
colorPicker.addEventListener('change',function() {
	color = colorPicker.value;
});

//Add a listener for the mouse movement (started below)
//Add a listener for the key events (started below)


canvas.addEventListener('mousemove', function(e){

	if(drawTrue){
		draw(e.clientX,e.clientY,radius);
	}
	
})

//Add a listener for the keydown
document.addEventListener('keydown', function(e){

	if(e.key == "r") {
		color = "red";
	} else if (e.key == "b") {
		color = "blue";
	} else if (e.key == "g") {
		color = "green";
	} else if (e.key == "y") {
		color = "yellow";
	} else if (e.key == " ") {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	} else if (e.key == "ArrowUp") {
		drawTrue = false;
	} else if (e.key == "ArrowDown") {
		drawTrue = true;
	}
	
})

// document.addEventListener('spacebar', function(e){
// 	ctx.fillStyle = ;
// })

// Functions!
// I would add a function for draw
function draw(x,y,radius){
	//CHECK OUT beginPath()
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, 2 * Math.PI);
	ctx.fill();
}

