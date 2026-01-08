/*

Title: Welcome to Buzztown

A bee that "buzzes" and is controlled by the mouse cursor.

https://editor.p5js.org/jenagosta/sketches/Sy5wzBblg - Hexagon function



*/

let xpos = 0; //define variables for hexagon function
let ypos = 0; 
let cG; //define color
let wingOffset = 0; //starting point for randomly moving wing


function setup() {
  createCanvas(800, 600);

  cG = color(128, 128, 128)
  cG.setAlpha(200); //Color of the bees wing
  noCursor(); //so the bee is the cursor!
}

function draw() {

  background(230,210,80);

    for(let x = 0; x <= 900; x = x + 150) 
   for(let y = 0; y <= 600; y = y + 150)
    { hexagon(x,y,0.5);} //hexagon function

  fill(255,255,0);
  stroke(0); 


  //The bee!
  push();
  translate(mouseX-377,mouseY-300); //Bee was created in the middle of the canvas, these values are compensated for it
beginShape()
  ellipse(400,300,100,50);
  ellipse(360,290,50,50);
  fill(0);
  rect(390,275,5,50);
  rect(420,280,5,40); 
  ellipse(345,290,5,5);
  rect(355,245,1,20);
  ellipse(354,248,10,10);
  fill(cG);
  noStroke();
  ellipse(410, 280 + wingOffset, 40, 20);
  endShape(CLOSE);
  pop();

  mouseY = random(mouseY+2,mouseY-2); //Random movement of whole B to achieve buzzing effect
wingOffset = random(-2,2); //Random movement of wing specifically
 
 fill(255,255,0);
  stroke(0);


  print(mouseX,mouseY);


}


function hexagon(transX, transY, s) {
  stroke(255,175,0);
  strokeWeight(5);
  fill(255,200,0);
  push();
  translate(transX, transY);
  scale(s);
  beginShape();
    vertex(-75, -130);
    vertex(75, -130);
    vertex(150, 0);
    vertex(75, 130);
  vertex(-75, 130);
    vertex(-150, 0);
    endShape(CLOSE); 
    pop();
}