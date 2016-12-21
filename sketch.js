
var mic;


function setup() {
  createCanvas(600, 400);
  
  mic = new p5.AudioIn();
  mic.start();

}

function draw() {
  background(100);
  //var volume = map (mic.getLevel(), 0, 1, height, 0);
  var volume = map (mic.getLevel(), 0, 1, 0, height);
  console.log(volume);
  
  //ellipse (width/2, volume, 20, 20);
  //ellipse (width/2, height/2, 50, volume);
ellipse (width/2, height/2, volume, volume);
}

function mousePressed() {
  if (song.isPlaying()) {
    song.pause();
  }
  else  {
    //song.play();
    song.loop();
  }

}