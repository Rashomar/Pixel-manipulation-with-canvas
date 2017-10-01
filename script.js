
window.requestAnimationFrame = (function(){ 
  return  window.requestAnimationFrame       ||  
          window.webkitRequestAnimationFrame ||  
          window.mozRequestAnimationFrame    ||  
          window.oRequestAnimationFrame      ||  
          window.msRequestAnimationFrame;
})(); 

var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');

var fps = 2;
var lastTime = 0;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

drawIt();
function drawIt(time){
	requestAnimationFrame(drawIt);
	if(time - lastTime > 1000/fps){
		lastTime = time;

	var img = new Image();
	img.src="photo.jpg";
	img.onload = function(){
		//drawing the image to the canvas
		c.drawImage(img,0,0,550,700);

		//getting the canvas data
		var data = c.getImageData(0,0,canvas.width,canvas.height);
		var ran1 = Math.random()*256|0;
		var ran2 = Math.random()*256|0;
		var ran3 = Math.random()*256|0;
		//inverting each pixel
		for(var i=0; i<data.width*data.height; i++){ 
			var index = i*4;
			data.data[index] = ran1-data.data[index];
			data.data[index+1] = ran2-data.data[index+1];
			data.data[index+2] = ran3-data.data[index+2];		
		}
		//setting the data back
		c.putImageData(data,0,0);
	};

	}
}
