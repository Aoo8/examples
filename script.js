/* VARIABLES */

/* SETUP RUNS ONCE */
function setup() {
  //sets the screen size
  createCanvas(400, 400); 
  

  //sets the background color
  background(255,249,226);  
}

/* DRAW LOOP REPEATS */
function draw() {
 rectMode(CENTER);
  
  ellipse(60, 320, 100, 150);


  line(140, 370, 380, 370);
  
  rect(200, 200, 120, 40);
  
  angleMode(DEGREES);
  arc(320, 50, 100, 100, 0, 180);

  textSize(30);
  text("Adenike", 140, 370);

  textSize(15);
  text("This is a piece of art\n we created to practice\n drawing shapes and text\n to a p5.js sketch.", 20, 20)

}