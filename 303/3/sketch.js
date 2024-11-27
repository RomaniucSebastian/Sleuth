/*

Officer: 5560319
CaseNum: 303-2-23413139-5560319

Case 303 - The Case of the Crooked Attorney
Stage 3 - The Gates Bank

I’ve made an appointment for you at the Gates Bank to retrieve your safe deposit box from the vault.
Actually you will break into Torvalds’ one.

Crack the safe by doing the following:

	Whilst the mouse is moving:
	- Make Secret_Box_Combination0 equal to the value of mouseX
	- Use the 'min' function to prevent Secret_Box_Combination0 from going above 17

	When the mouse button is pressed:
	- Decrement Secret_Box_Combination1 by 2
	- Use the 'max' function to prevent Secret_Box_Combination1 from falling below 3

	Whilst the mouse is moving:
	- Make Secret_Box_Combination2 equal to the value of mouseY
	- Use the 'constrain' function to prevent Secret_Box_Combination2 from falling below 3 and going above 18

	When the mouse button is released:
	- Increment Secret_Box_Combination3 by 3
	- Use the 'min' function to prevent Secret_Box_Combination3 from going above 20

	Whilst the mouse is being dragged:
	- Make Secret_Box_Combination4 equal to the value of mouseX
	- Use the 'max' function to prevent Secret_Box_Combination4 from falling below 20



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- Incrementing +=
	- Decrementing -=
	- min, max
	- constrain

*/

//declare the variables

var Secret_Box_Combination0;
var Secret_Box_Combination1;
var Secret_Box_Combination2;
var Secret_Box_Combination3;
var Secret_Box_Combination4;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	Secret_Box_Combination0 = 0;
	Secret_Box_Combination1 = 0;
	Secret_Box_Combination2 = 0;
	Secret_Box_Combination3 = 0;
	Secret_Box_Combination4 = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...


// Whilst the mouse is moving
function mouseMoved() {
  // Make Secret_Box_Combination0 equal to the value of mouseX
  // Use the 'min' function to prevent Secret_Box_Combination0 from going above 17
  Secret_Box_Combination0 = min(mouseX, 17);

  // Make Secret_Box_Combination2 equal to the value of mouseY
  // Use the 'constrain' function to prevent Secret_Box_Combination2 from falling below 3 and going above 18
  Secret_Box_Combination2 = constrain(mouseY, 3, 18);
}

// When the mouse button is pressed
function mousePressed() {
  // Decrement Secret_Box_Combination1 by 2
  // Use the 'max' function to prevent Secret_Box_Combination1 from falling below 3
  Secret_Box_Combination1 = max(Secret_Box_Combination1 - 2, 3);
}

// When the mouse button is released
function mouseReleased() {
  // Increment Secret_Box_Combination3 by 3
  // Use the 'min' function to prevent Secret_Box_Combination3 from going above 20
  Secret_Box_Combination3 = min(Secret_Box_Combination3 + 3, 20);
}

// Whilst the mouse is being dragged
function mouseDragged() {
  // Make Secret_Box_Combination4 equal to the value of mouseX
  // Use the 'max' function to prevent Secret_Box_Combination4 from falling below 20
  Secret_Box_Combination4 = max(mouseX, 20);
}


///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{

	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dials
	push();
	translate(120,170);
	drawDial(140,Secret_Box_Combination0, 23);
	pop();

	push();
	translate(120,380);
	drawDial(140,Secret_Box_Combination1, 16);
	pop();

	push();
	translate(280,170);
	drawDial(140,Secret_Box_Combination2, 24);
	pop();

	push();
	translate(280,380);
	drawDial(140,Secret_Box_Combination3, 26);
	pop();

	//Draw the lever
	push();
	translate(width - 125,256);
	drawLever(Secret_Box_Combination4);
	pop();


}

function drawDial(diameter,num,maxNum)
{
	//the combination lock

	var r = diameter * 0.5;
	var p = r * 0.6;

	stroke(0);
	fill(255,255,200);
	ellipse(0,0,diameter,diameter);
	fill(100);
	noStroke();
	ellipse(0,0,diameter*0.66,diameter*0.66);
	fill(150,0,0);
	triangle(
		-p * 0.4,-r-p,
		p * 0.4,-r-p,
		0,-r-p/5
	);

	noStroke();

	push();
	var inc = 360/maxNum;

	rotate(radians(-num * inc));
	for(var i = 0; i < maxNum; i++)
	{
		push();
		rotate(radians(i * inc));
		stroke(0);
		line(0,-r*0.66,0,-(r-10));
		noStroke();
		fill(0);
		text(i,0,-(r-10));
		pop();
	}

	pop();
}

function drawLever(rot)
{
	push();
	rotate(radians(-rot))
	stroke(0);
	fill(100);
	rect(-10,0,20,100);
	ellipse(0,0,50,50);
	ellipse(0,100,35,35);
	pop();
}
