let capture;
let bottom;
let a=360,b=200, m=120, n=100;
let scale1=[1,3,5,7];
let scale2=[1,3];
let d = 30;
let c1;
let c2;
var graphics;

function setup() {
  createCanvas(600, 400);
  graphics = createGraphics(600, 400);
  background(255);
  capture= createCapture(VIDEO);
  capture.hide();
  button = createButton('submit');
  button.position(0, 0);
  button.mouseClicked(drawBoxes);

}

function draw() {
  // background(0);
  image(capture,0,0, 600,400);
  filter(GRAY);
  noFill();
  stroke(0,255,0);
  rect(m,n,a,b);

if (mouseIsPressed) {
    drawBoxes();
  }


}


function drawBoxes(){
  c1= random(scale1);
  c2= random(scale2);
  c3= random(scale1);
  c4= random(scale2);
  noFill();
  stroke(0,255,0);
  circle(m+a/8*c1,n+b/4*c2,30);
   noLoop();
  circle(m+a/8*c3,n+b/4*c4,30);
  print(c1,c2,c3,c4);

}
