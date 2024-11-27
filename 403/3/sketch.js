/*

Officer: 5560319
CaseNum: 403-2-65488182-5560319

Case 403 - Cornered - stage 3

We have Shiffman cornered at The Plaza Hotel and more help is on the way.
Until our backup arrives the orders are to make sure he stays inside The Plaza Hotel

Your job is to indicate that Shiffman (signified by the mouse) is indeed within the North - East - South - West bounds of The Plaza Hotel.
Draw a DarkMagenta rectangle covering The Plaza Hotel for as long as Shiffman is in it.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you should use ONLY the following commands, operators and variables:

  if(){}
  >
  <
  &&
  fill()  - Use r,g,b values between 0 and 255.
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

 // Plaza Hotel bounds
  var plazaHotelNWx = 1448;
  var plazaHotelNWy = 223;
  var plazaHotelSEx = 1727;
  var plazaHotelSEy = 345;

  // Shiffman's position (using actual mouse position)
  var shiffmanX = mouseX;
  var shiffmanY = mouseY;

  // Check if Shiffman is within the bounds of The Plaza Hotel
  if (shiffmanX > plazaHotelNWx && shiffmanX < plazaHotelSEx &&
      shiffmanY > plazaHotelNWy && shiffmanY < plazaHotelSEy) {
    // Draw DarkMagenta rectangle covering The Plaza Hotel
    fill(139, 0, 139);
    rect(plazaHotelNWx, plazaHotelNWy, plazaHotelSEx - plazaHotelNWx, plazaHotelSEy - plazaHotelNWy);
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

