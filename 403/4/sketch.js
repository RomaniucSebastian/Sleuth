/*

Officer: 5560319
CaseNum: 403-3-69347647-5560319

Case 403 - Captured - stage 4

A coordinated action is under way to arrest Shiffman. Police are currently in pursuit on Leodorf Way.
In order to catch him we must be able to alert all forces of his whereabouts according to the following rules:

- if Shiffman is within 70 meters from Jerry's Wine Bar then alert local police by drawing a DarkRed circle around it with a radius of 70 pixels.
- if Shiffman is in Gates Bank then the neighbourhood watch must be notified by drawing a DarkMagenta rectangle around it.
- if Shiffman is in neither position, a global alert must be issued by drawing a MediumVioletRed rectangle covering the area between Berners-Lee Street, Reynolds Street, Leodorf Way and Huffman Street.

Shiffman's position is signified by the mouse.

Note: all road coordinates are measured from their center.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you should use ONLY the following commands, operators and variables:

  if(){}
  >
  <
  &&
  else
  fill()  - Use r,g,b values between 0 and 255.
  dist()
  ellipse()
  rect()
  mouseX
  mouseY

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
 // Coordinates for Jerry's Wine Bar
  var jerrysWineBarX = 2001;
  var jerrysWineBarY = 635;

  // Coordinates for Gates Bank
  var gatesBankX1 = 1474;
  var gatesBankY1 = 649;
  var gatesBankX2 = 1578;
  var gatesBankY2 = 743;

  // Shiffman's position (using actual mouse position)
  var shiffmanX = mouseX;
  var shiffmanY = mouseY;

  // Check if Shiffman is within 70 meters from Jerry's Wine Bar
  var distanceToJerrysWineBar = dist(shiffmanX, shiffmanY, jerrysWineBarX, jerrysWineBarY);
  if (distanceToJerrysWineBar < 70) {
    // Draw DarkRed circle around Jerry's Wine Bar
      
    fill(139, 0, 0); // DarkRed color
    ellipse(jerrysWineBarX, jerrysWineBarY, 140, 140); // Diameter is twice the radius
  } else {
    // Check if Shiffman is in Gates Bank
    if (shiffmanX > gatesBankX1 && shiffmanX < gatesBankX2 && shiffmanY > gatesBankY1 && shiffmanY < gatesBankY2) {
      // Draw DarkMagenta rectangle around Gates Bank
      fill(139, 0, 139); // DarkMagenta color
      rect(gatesBankX1, gatesBankY1, gatesBankX2 - gatesBankX1, gatesBankY2 - gatesBankY1);
    } else {
      // Shiffman is in neither position, issue a global alert
      // Draw MediumVioletRed rectangle covering the specified area
      fill(199, 21, 133); // MediumVioletRed color
      rect(178, 2, 986, 376); 
// MediumVioletRed rectangle covering the area between Berners-Lee Street, Reynolds Street, Leodorf Way and Huffman Street.
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
}
