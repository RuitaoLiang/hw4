var osc;
var playing = false;
var earthquakes;
var circles = [];

function preload() {
  // Get the most recent earthquake in the database
  var url =
   'https://earthquake.usgs.gov/earthquakes/feed/v1.0/' +
    'summary/all_day.geojson';
  earthquakes = loadJSON(url);
}

function setup() {
   createCanvas(400, 400);
  	colorMode(HSB)
	for (var index = 0; index < 100; index = index + 1) {
    // new "circle" object, with x, y, xd and yd properties:
    circles[index] = {
     x: random(width/4,width),
      y: random(height/4,height),
		 	d: random(3,40),
      xd: random(-2, 2),
      yd: random(-2, 2),
      c: color(random(255), random(255), random(255))
}
	}
}

function playMusic(earthquakes) {
	var earthquakeMag = earthquakes.features[0].properties.mag;
	print(earthquakeMag*100);
	osc = new p5.Oscillator();
  osc.setType('triangle');
  osc.freq(earthquakeMag*100);
  osc.amp(0);
  osc.start();
}

function draw() {
	var earthquakeMag = earthquakes.features[0].properties.mag;
	for (var index = 0; index < 100; index = index + 1) {
    // get circle object
    var circle = circles[index];

  if (earthquakeMag*100 >=100) {
    fill(circle.c);
  ellipse(circle.x, circle.y, circle.d);
  } else if (earthquakeMag*100 <=100) {
    background(255, 0, 255);
		fill(circle.c);
	rect(circle.x, circle.y, circle.d, circle.d);
	}
		//if (random() < 0.001) {

    //circle.d = random(1, 40);
 // }
  

 // if (random() < 0.002) {

   // circle.d = random(1, 40);
  }
}

function mousePressed() {
	var earthquakeMag = earthquakes.features[0].properties.mag;
	print(earthquakeMag*100);
  playMusic(earthquakes);
  if (osc) {
    osc.amp(0.5, 0.1);
    playing = true;
  }
}
function mouseReleased() {
   //playMusic(earthquakes);
  if (osc) {
    osc.amp(0, 0.5);
    playing = false;
  }
}
//}
