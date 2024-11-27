/*

Officer: 5560319
CaseNum: 702-0-79612789-5560319

Case 702 - The case of Vanishing Vannevar
Stage 1 - Mobilise

“Calling all units: the notorious criminal and speedster known as Vanishing Vannevar is on the run.
All cars to mobilise.” Word has it that you’re pretty nifty behind the wheel. I want you in on
this action kid. Get your car on the road by completing the </DRIVE_NAME/> function below.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- increment variables
	- random
	- constrain
	- calling functions

HINT: make sure you take a look at the initialisation of SleuthCarObject to understand it's properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function Drive_Car()
{
	/*
	This function should do the following: 
	 - increment SleuthCarObject's DistanceTravelled property by its SpeedAmount property 
	 - add a random amount between -0.1 and 0.1 to SleuthCarObject's RumbleAmt property
	 - use the constrain function to constrain SleuthCarObject's RumbleAmt property to values between 0.07 and 0.84
	 - call the Cycle_Motor function passing SleuthCarObject as an argument
	*/
    SleuthCarObject.DistanceTravelled += SleuthCarObject.SpeedAmount;
    SleuthCarObject.RumbleAmt += random(-0.1,0.1);
    SleuthCarObject.RumbleAmt = constrain(SleuthCarObject.RumbleAmt,0.07,0.84);
    Cycle_Motor(SleuthCarObject);
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var SleuthCarObject;

var roadWidth = 400;
var roadLeftEdge = 200;
var carImages = {};


function preload()
{
	carImages.detective = loadImage("cars/detective.png");
}

function setup()
{
	createCanvas(800,800);

	SleuthCarObject = 
	{
		PosX: roadLeftEdge + roadWidth/4,
		PosY: 300,
		DistanceTravelled: 0,
		SpeedAmount: 3,
		RumbleAmt: 0,
		VehicleModel: 'detective',
		LicencePlate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);


	Drive_Car();


	drawRoad();
	drawCars();
}

/////////////////////////DRAWING FUNCTIONS////////////////////////

function drawRoad()
{
	stroke(100);
	fill(50);
	rect(roadLeftEdge,0,roadWidth,800);
	stroke(255);

	for(var i = -1; i < 20; i++)
	{
		line(
		roadLeftEdge + roadWidth/2 , i * 100 + (SleuthCarObject.DistanceTravelled%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (SleuthCarObject.DistanceTravelled%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(SleuthCarObject);
	image
	(
		carImages["detective"],
		SleuthCarObject.PosX - carImages["detective"].width/2 + random(-SleuthCarObject.RumbleAmt, SleuthCarObject.RumbleAmt),
		SleuthCarObject.PosY + random(-SleuthCarObject.RumbleAmt, SleuthCarObject.RumbleAmt)
	);

}

function Cycle_Motor(car)
{

	car.exhaust.push({size: 2, x: car.PosX, y: car.PosY + carImages[car.VehicleModel].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.SpeedAmount/3);
		car.exhaust[i].x += random(-1,1);
		car.exhaust[i].size += 0.5;

		if(car.exhaust[i].y  > height)
		{
			car.exhaust.splice(i,1);
		}
	}
}


function drawExhaust(car)
{
		noStroke();
		for(var i = 0; i < car.exhaust.length; i++)
		{
				var alpha = map(car.exhaust[i].size, 0, 40, 50,0);
				fill(125,alpha);
				ellipse(car.exhaust[i].x + 20, car.exhaust[i].y , car.exhaust[i].size);

		}
}
