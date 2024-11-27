/*

Officer: 5560319
CaseNum: 303-3-57628754-5560319

Case 303 - The Case of the Crooked Attorney
Stage 4 - The Courthouse

Torvalds has his final safe in his courthouse chambers. Luckily there is a court case proceeding.
You can sneak into his chambers whilst he makes his closing statement.

Crack the safe by doing the following:

	Whilst the mouse is being dragged:
	- Use the 'map' function to scale mouseX to values ranging from 1 to 8.
	- Assign the output to ClassifiedStorageKey0

	Whilst the mouse is moving:
	- Use the 'random' function to produce random values ranging from 1 to 14.
	- Assign the output to ClassifiedStorageKey1

	When any key is pressed:
	- Make ClassifiedStorageKey2 equal to the value of 'key'

	When the mouse button is pressed:
	- Use the 'map' function to scale mouseX to values ranging from 17 to 73.
	- Assign the output to ClassifiedStorageKey3

	When the mouse button is released:
	- Use the 'map' function to scale mouseY to values ranging from 14 to 72.
	- Assign the output to ClassifiedStorageKey4

	When the mouse button is pressed:
	- Use the 'map' function to scale mouseX to values ranging from 17 to 73.
	- Assign the output to ClassifiedStorageKey5



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- key, keyCode
	- random
	- map

*/

//declare the variables

var ClassifiedStorageKey0;
var ClassifiedStorageKey1;
var ClassifiedStorageKey2;
var ClassifiedStorageKey3;
var ClassifiedStorageKey4;
var ClassifiedStorageKey5;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	ClassifiedStorageKey0 = 0;
	ClassifiedStorageKey1 = "";
	ClassifiedStorageKey2 = "";
	ClassifiedStorageKey3 = 0;
	ClassifiedStorageKey4 = 0;
	ClassifiedStorageKey5 = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...

// Whilst the mouse is being dragged
function mouseDragged() {
  // Use the 'map' function to scale mouseX to values ranging from 1 to 8.
  // Assign the output to ClassifiedStorageKey0
  ClassifiedStorageKey0 = map(mouseX, 0, width, 1, 8);
}

// Whilst the mouse is moving
function mouseMoved() {
  // Use the 'random' function to produce random values ranging from 1 to 14.
  // Assign the output to ClassifiedStorageKey1
  ClassifiedStorageKey1 = random(1, 14);
}

// When any key is pressed
function keyPressed() {
  // Make ClassifiedStorageKey2 equal to the value of 'key'
  ClassifiedStorageKey2 = key;
}

// When the mouse button is pressed
function mousePressed() {
  // Use the 'map' function to scale mouseX to values ranging from 17 to 73.
  // Assign the output to ClassifiedStorageKey3
  ClassifiedStorageKey3 = map(mouseX, 0, width, 17, 73);
}

// When the mouse button is released
function mouseReleased() {
  // Use the 'map' function to scale mouseY to values ranging from 14 to 72.
  // Assign the output to ClassifiedStorageKey4
  ClassifiedStorageKey4 = map(mouseY, 0, height, 14, 72);
}



///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{

	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dial
	push();
	translate(256,180);
	drawDial(170,ClassifiedStorageKey0,20);
	pop();

	//Draw the spinners
	push();
	translate(206,280);
	drawSpinner(3, ClassifiedStorageKey1);
	pop();

	push();
	translate(306,280);
	drawSpinner(3, ClassifiedStorageKey2);
	pop();

	//Draw the levers
	push();
	translate(125,356);
	drawLever(ClassifiedStorageKey3);
	pop();

	push();
	translate(250,356);
	drawLever(ClassifiedStorageKey4);
	pop();

	push();
	translate(375,356);
	drawLever(ClassifiedStorageKey5);
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

function drawSpinner(numSpinners, val)
{
	var sw = 20;
	var ow = (sw + 5) * numSpinners + 5;
	stroke(0);
	fill(100);
	rect(-ow/2,0,ow,35);
	if(typeof(val) == "number")
	{
		val = floor(val).toString(); //convert to string
	}
	var d = numSpinners - val.length;

	for(var d = numSpinners - val.length; d > 0; d--)
	{
		val = "-" + val;
	}

	for(var i = 0; i < numSpinners; i++)
	{
		stroke(0);
		fill(255,255,200);
		rect(-ow/2 + i * (sw + 5) + 5,5,20,25);
		fill(0);
		noStroke();
		text(val[i],-ow/2 + sw/2 + i * (sw +5),25);
	}

}
