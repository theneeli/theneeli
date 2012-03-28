// JavaScript Document



onload = function Load()
{
	
	var js_canvas = document.getElementById('html_canvas');
	var js_context = js_canvas.getContext('2d');
	var img = new Image();
	img.onload = function(){
    js_canvas.width = img.width;
    js_canvas.height = img.height;
    js_context.drawImage(img, 0, 0, img.width, img.height);
	}
	
	img.src = 'test.jpg';	
	
	document.captureEvents(event.MOUSEDOWN);
	document.captureEvents(event.MOUSEUP);
}

function actionCrop()
{
	
	
	var js_canvas = document.getElementById('html_canvas');
    var js_context = js_canvas.getContext('2d');
	var img = document.createElement('Image');
	img.src = 'test.jpg';	

	js_canvas.width = img.width;
    js_canvas.height = img.height;
    js_context.drawImage(img,20,30,100,100,0,0,100,100);
	
	 js_context.drawImage(img,20,30,100,100,100,0,100,100);

}

function CanvasFirstClick(e)
{
var e = event;
//alert(e.pageX);

    var js_canvas = document.getElementById('html_canvas');
    var js_context = js_canvas.getContext('2d');
    var img = document.createElement('Image');
	
	// Draw the image again
	img.src = 'test.jpg';	
	js_canvas.width = img.width;
    js_canvas.height = img.height;
	js_context.drawImage(img, 0, 0, img.width, img.height);
	
    //js_context.drawImage(img,e.pageX,e.pageY,img.width-e.pageX,img.height-e.pageY,e.pageX,e.pageY,img.width-e.pageX,img.height-e.pageY);
	
	// Draw transparent rectangles on top 
	js_context.fillStyle = "rgba(200,0,0,0.5)";
	js_context.fillRect(0,0,e.pageX,js_canvas.height);
	js_context.fillRect(e.pageX,0,js_canvas.width,e.pageY);
	
	//Horizontal anchor point
	var imghor = document.createElement('Image');
	imghor.src = 'marqueeHoriz.gif';	
	js_context.drawImage(imghor,e.pageX,e.pageY);

	// Vertical anchor point
	var imagver = document.createElement('Image');
	imagver.src = 'marqueeVert.gif';	
	js_context.drawImage(imagver,e.pageX,e.pageY);
	
}

function CanvasLastClick(e)
{
var e = event;
//alert(e.pageY);
	
}