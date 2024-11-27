/*
402 - The case of the Why Gang ruby heist
Stage 4 - Fox

Officer: 5560319
CaseNum: 402-3-49206087-5560319

This final Why gang member Fox is the boss of the gang. Fox is particularly cunning and has hidden herself down this twisted network of alleys known as vice city. Head into vice city to find her but don’t get lost!

- Write if statements in the draw loop to set the direction for the detective
- Do this using the properties of the detective object, speedX and speedY. 
	- For example, to go north you would write the following code:
		det.speedX = 0; 
		det.speedY = -1;

- There are many ways to complete this task but you should only use the following commands and operators:
	if(){}
	else if
	>
	<
	&&

- You will need to make careful use of `else if` and the && operator for this task. Join all conditionals with "else if" and use at least one && operator for each condition.

*/

var currentRoad;
var direction;
var mapImage;
var overlayImage;

//the detective object
var det = {
	speedX: 0,
	speedY: 0,
	locationX: 73,
	locationY: 634,
	currentStreet: undefined,
	image: './det.png'
};

function preload()
{
	perp.image = loadImage(perp.image);
	det.image = loadImage(det.image);
	mapImage = loadImage("./map.png");
	overlayImage = loadImage("./overlay.png")
}

function setup()
{
	createCanvas(1024, 768);
}

function draw()
{

	///////////////////ADD YOUR CODE HERE///////////////////
	//up
if (det.locationY > 197 && det.locationX < 85)
{
    det.speedX = 0;
    det.speedY = -1;
}

// right x 250 y 197
else if (det.locationX < 250 && det.locationY > 197 && det.locationY < 498)
{
    det.speedX = 1;
    det.speedY = 0;
}

//down x 258, y 498
else if (det.locationY < 498 && det.locationX > 258 && det.locationX < 504)
{
    det.speedX = 0;
    det.speedY = 1;
}

//right x 504, y 506
else if (det.locationX < 504 && det.locationY > 506 && det.locationY < 561)
{
    det.speedX = 1;
    det.speedY = 0;
}

//up x 511 ,y 138
else if (det.locationY > 138 && det.locationX > 511 && det.locationX < 628)
{
    det.speedX = 0;
    det.speedY = -1;
}

// right x 628, y 138
else if (det.locationX < 628 && det.locationY > 138 && det.locationY < 561)
{
    det.speedX = 1;
    det.speedY = 0;
}

//down  x 636, y 561
else if (det.locationY < 561 && det.locationX > 636 && det.locationX < 754)
{
    det.speedX = 0;
    det.speedY = 1;
}

//right x 754, y 569
else if (det.locationX < 754 && det.locationY > 569 && det.locationY < 698)
{
    det.speedX = 1;
    det.speedY = 0;
}

//up x 765, y 77
else if (det.locationY > 77 && det.locationX > 765 && det.locationX < 884)
{
    det.speedX = 0;
    det.speedY = -1;
}

//right x 884, y 69
else if (det.locationX < 884 && det.locationY > 69 && det.locationY < 698)
{
    det.speedX = 1;
    det.speedY = 0;
}

//down x 890 ,y 698
else if (det.locationY < 698 && det.locationX > 890)
{
    det.speedX = 0;
    det.speedY = 1;
}


	///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

	background(50);

	if (perp.caught === 0)
	{
		det.locationX += det.speedX;
		det.locationY += det.speedY;
	}

	//draw the images of the map perp and the detective
	image(mapImage, 0, 0);
	image(overlayImage, 0, 0);
	image(perp.image, perp.locationX - roadWidth, perp.locationY - roadWidth, roadWidth * 2, roadWidth * 2);

	push();
	translate(det.locationX, det.locationY);
	if (det.speedX != 0) rotate((det.speedX - 1.5) * PI);
	else if (det.speedY < 0) rotate(PI);
	image(det.image, -roadWidth, -roadWidth, roadWidth * 2, roadWidth * 2);
	pop();

	push();
	textAlign(CENTER);
	textSize(32);
	noStroke();

	//the perp has been caught
	if (dist(det.locationX, det.locationY, perp.locationX, perp.locationY) < roadWidth / 2)
	{
		//display message to the player
		fill(0, 220, 0);
		text("Just in the nick of time! \nYou caught " + perp.name, width / 2, height / 2);
		perp.caught = 1;
	}

	//not on any roads, therefore the game is lost.
	if (!getOnRoad() || (det.speedX == 0 && det.speedY == 0))
	{
		fill(255, 0, 0);
		text("You let " + perp.name + " get away.\n Better luck next time.", width / 2, height / 2);
		perp.caught = -1;
	}

	pop();

	hud();

	fill(255);
	text(`${mouseX},${mouseY}`, mouseX, mouseY);
}

function hud()
{
	push();
	fill(250);
	noStroke();
	textAlign(LEFT, TOP);
	text("detective location - x: " + det.locationX + " y: " + det.locationY, 5, 5);
	pop();
}

function getOnRoad()
{

	if (mapImage.get(det.locationX, det.locationY)[0] == bckgrndColour)
	{
		return false;
	}

	return true;
}

var roadWidth = 25;
var bckgrndColour = 50;
var perp = {
	caught: 0,
	name: 'Fox',
	image: './perp.png',
	locationX: 889,
	locationY: 696
};