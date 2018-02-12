var osc;
var playing = false;
var earthquakes;

function preload() {
  // Get the most recent earthquake in the database
  var url =
   'https://earthquake.usgs.gov/earthquakes/feed/v1.0/' +
    'summary/all_day.geojson';
  earthquakes = loadJSON(url);
}

function setup() {
  noLoop();
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
  if (earthquakeMag*100 >=100) {
    background(0, 255, 255);
		fill(255, 204, 0);
	rect(20, 20, 60, 60);
  } else if (earthquakeMag*100 <=50) {
    background(255, 0, 255);
		fill(51);
	rect(20, 20, 60, 60);
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
