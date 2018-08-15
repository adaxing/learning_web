// orginal 
var myCircle = new Path.Circle(new Point(10,10), 100);
myCircle.fillColor = 'pink';

// version 1
var row = 10;
var col = 10;

// center coordinates of any circle 
var x;
var y; 
var xstart = 0;
var ystart = 0;

// distance between center coordinates
var xspacing = 100;
var yspacing = 100;
var radius = 10;
var fillColor = "pink";
for (var r=1; r<= row; r++){
	y = ystart + (r-1)*yspacing;
	for (var c=1; c<= col; c++) {
		x = xstart + (c-1)*xspacing;
		new Path.Circle(new Point(x,y), radius).fillColor = fillColor; 
}
}


// version 2

for (var x=0; x<1000; x+=100) {
		for (var y=0; y<1000; y+=100) {
			var circle = new Path.Circle(new Point(x,y),10);
			circle.fillColor = "pink";
		}	
	}

// add howler
var sound1 = new Howl({
	src: ['sd/bubbles.mp3']
});

var sound2 = new Howl({
	src: ['sd/clay.mp3']
});

var circles = [];
// random point 	
function onKeyDown(event) {
	// generate whole screen pixel, fixed number 
	// return to right bottom corner
	var maxPoint = new Point(view.size.width, view.size.height);
	// return 0-1
	var randomPoint = Point.random();
	// since randomPoint always different, then point will be random
	var point = maxPoint*randomPoint;
	var circle = new Path.Circle(point,500);


	if(event.key =="a") {
		sound1.play();
		circle.fillColor ="pink";
	}
	else if(event.key =="s") {
		sound2.play();
		circle.fillColor ="#163289";
	} else {
		circle.fillColor ="orange";
	}
	
	circles.push(circle);


	}