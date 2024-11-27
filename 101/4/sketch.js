/*

Officer: 5560319
CaseNum: 101-3-30585519-5560319

Case 101 - The Case of Anna Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Anna’s style. Now’s our chance to find out the root of all
of this. Lets see who is Anna meeting.

Identify Anna by drawing a Dark Cyan filled rectangle with a Green outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar by drawing a Lawn Green filled
rectangle with a Dark Goldenrod outline around him.

Identify the man reading the newspaper by drawing a Orange Red filled rectangle
with a Dark Orchid outline around him.

Identify the woman with the dog by drawing a Brown filled rectangle with a
Medium Slate Blue outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.
  stroke() Use r,g,b values between 0 and 255.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	strokeWeight(2);
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...

 // Identify Anna
  fill(0, 139, 139, 100); // Dark Cyan with opacity
  stroke(0, 128, 0); // Green outline
  rect(1, 58, 100, 204); // Rectangle around Anna

  // Identify the man with the monocle smoking the cigar
  fill(124, 252, 0, 100); // Lawn Green with opacity
  stroke(184, 134, 11); // Dark Goldenrod outline
  rect(397, 229, 291, 388); // Rectangle around the man with monocle

  // Identify the man reading the newspaper
  fill(255, 69, 0, 100); // Orange Red with opacity
  stroke(153, 50, 204); // Dark Orchid outline
  rect(1152, 128, 234, 461); // Rectangle around the man reading newspaper

  // Identify the woman with the dog
  fill(139, 69, 19, 100); // Brown with opacity
  stroke(123, 104, 238); // Medium Slate Blue outline
  rect(856, 28, 210, 452); // Rectangle around the woman with the dog


	//A helpful mouse pointer
	push();
		fill(0);
		noStroke();
		text(mouseX + "," + mouseY, mouseX,mouseY);
	pop();


}
