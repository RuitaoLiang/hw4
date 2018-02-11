
var freqA = 174;
var freqS = 196;


var oscA, oscS;

var playing = false;

function setup() {
  backgroundColor = color(255, 0, 255);
  textAlign(CENTER);
  
  oscA = new p5.Oscillator();
  oscA.setType('triangle');
  oscA.freq(freqA);
  oscA.amp(0);
  oscA.start();
  
  oscS = new p5.Oscillator();
  oscS.setType('triangle');
  oscS.freq(freqS);
  oscS.amp(0);
  oscS.start();
}

function draw() {
  if (playing) {
    background(0, 255, 255);
  } else {
    background(255, 0, 255);
  }
	fill(255, 204, 0);
	rect(20, 20, 60, 60);
}

function mousePressed() {
  print("got key press for ", key);
  var osc;
    osc = oscA;
  
  if (osc) {
    osc.amp(0.5, 0.1);
    playing = true;
  }

}
function mouseReleased() {
  print("got key release for ", key);
  var osc;

    osc = oscA;
 
  if (osc) {
    osc.amp(0, 0.5);
    playing = false;
  }
}
