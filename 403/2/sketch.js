/*

Officer: 5560319
CaseNum: 403-1-59426824-5560319

Case 403 - Stake out - stage 2

I've gotten hold of a hot tip that Shiffman is hiding out at Turing's Column.
We've alerted the local precinct but they cannot act unless they know for certain that he's within 60 meters (pixels) of the spot.

Whenever Shiffman (signified by the mouse) is within 60 pixels of Turing's Column - draw a CornflowerBlue ellipse with a radius of 60 around it.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you should use ONLY the following commands, operators and variables:

  if(){}
  >
  <
  fill()  - Use r,g,b values between 0 and 255.
  ellipse()
  dist()
  mouseX
  mouseY
  width
  height


*/

var img;

function preload()
{
	img = loadImage('map.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
}

function draw()
{
    // draw the image
    image(img,0,0);

    //Write your code below here ...

 // Turing's Column position
  var turingColumnX =1717;
  var turingColumnY = 834;

  // Shiffman's position (using actual mouse position)
  var shiffmanX = mouseX;
  var shiffmanY = mouseY;

  // Calculate the distance between Shiffman and Turing's Column
  var distance = dist(shiffmanX, shiffmanY, turingColumnX, turingColumnY);

  // Check if Shiffman is within 60 pixels of Turing's Column
  if (distance < 60) {
    // Draw CornflowerBlue ellipse
    fill(100, 149, 237);
    ellipse(shiffmanX, shiffmanY, 120, 120);
  }


    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);

    // a helpful mouse coordinate pointer
    fill(255);
    noStroke();
    text(`${mouseX},${mouseY}`,mouseX, mouseY);
}
