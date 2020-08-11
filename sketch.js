function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(0); 
  fill("blue"); 
  rect(250,200,300,200);
  
 text(mouseX + ": " + mouseY,mouseX,mouseY);
 fill("red");
 triangle(250,200,550,200,390,20)
 fill("green");
 rect(250,0,20,200);
 fill("green");
 rect(530,0,20,200);
 
  drawSprites();
}