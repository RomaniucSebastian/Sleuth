/*

Officer: 5560319
CaseNum: 702-1-57477305-5560319

Case 702 - The case of Vanishing Vannevar
Stage 2 - Downtown traffic

“All units: Vannevar is heading into the downtown area. Heavy traffic ahead. Drive safely.”
Complete the helper functions below to drive the car and avoid other vehicles. Keep on it kid.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of SleuthPIVehicle and the cars in
Cars_Array to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function moveCar()
{
	/*
	This function should do the following: 
	 - increment SleuthPIVehicle's MilesAmnt property by its AccelValue property 
	 - add a random amount between -0.04 and 0.04 to SleuthPIVehicle's VibrateValue property
	 - use the constrain function to constrain SleuthPIVehicle's VibrateValue property to values between 0.1 and 0.95
	 - call the turnMotor function passing SleuthPIVehicle as an argument
	*/
}


function changeLanes(targetCar)
{
	/*
	This function should do the following: 
	 - move targetCar from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use Lane_Pos_A and Lane_Pos_B to effect the change.
	 hint: You will need to modify the XCoordinate property of targetCar.
	*/
}


function checkVehicleIsInfront( car_obj )
{
	/*
	This function should do the following: 
	 - determine if car_obj is in the same lane and less than 200px behind any of the cars in Cars_Array.
	 - do this by traversing Cars_Array and comparing each car's MilesAmnt property to that of car_obj.
	 - if you find a car that matches these requirements then return the LicencePlate property for the car. Otherwise return false.
	*/
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var SleuthPIVehicle;

var roadWidth;
var roadLeftEdge;
var Lane_Pos_A;
var Lane_Pos_B;
var carImages = {};

var Cars_Array = [
{ XCoordinate: 300, YCoordinate: 0, MilesAmnt: -200, CarCategory: 'greenCar', LicencePlate: 'Z617ZG', AccelValue: 2, exhaust: [  ]} , { XCoordinate: 500, YCoordinate: 0, MilesAmnt: 200, CarCategory: 'greenCar', LicencePlate: 'LIPAY9', AccelValue: 2, exhaust: [  ]} , { XCoordinate: 300, YCoordinate: 0, MilesAmnt: 600, CarCategory: 'blueCar', LicencePlate: '7OV1K1', AccelValue: 2, exhaust: [  ]} , { XCoordinate: 500, YCoordinate: 0, MilesAmnt: 1000, CarCategory: 'greenCar', LicencePlate: 'JJVDAT', AccelValue: 2, exhaust: [  ]} , { XCoordinate: 500, YCoordinate: 0, MilesAmnt: 1400, CarCategory: 'blueCar', LicencePlate: 'OZVAWJ', AccelValue: 2, exhaust: [  ]} , { XCoordinate: 500, YCoordinate: 0, MilesAmnt: 1800, CarCategory: 'whiteCar', LicencePlate: '58TLER', AccelValue: 2, exhaust: [  ]} , { XCoordinate: 300, YCoordinate: 0, MilesAmnt: 2200, CarCategory: 'greenCar', LicencePlate: 'APZK6J', AccelValue: 2, exhaust: [  ]} , { XCoordinate: 300, YCoordinate: 0, MilesAmnt: 2600, CarCategory: 'redCar', LicencePlate: 'YVPDYF', AccelValue: 2, exhaust: [  ]} , { XCoordinate: 500, YCoordinate: 0, MilesAmnt: 3000, CarCategory: 'whiteCar', LicencePlate: '1DW5SN', AccelValue: 2, exhaust: [  ]} , { XCoordinate: 300, YCoordinate: 0, MilesAmnt: 3400, CarCategory: 'redCar', LicencePlate: '5ZZJDG', AccelValue: 2, exhaust: [  ]} , { XCoordinate: 300, YCoordinate: 0, MilesAmnt: 3800, CarCategory: 'greenCar', LicencePlate: 'AFXMW3', AccelValue: 2, exhaust: [  ]} , { XCoordinate: 500, YCoordinate: 0, MilesAmnt: 4200, CarCategory: 'greenCar', LicencePlate: 'RH90LU', AccelValue: 2, exhaust: [  ]} , { XCoordinate: 500, YCoordinate: 0, MilesAmnt: 4600, CarCategory: 'greenCar', LicencePlate: '1616RP', AccelValue: 2, exhaust: [  ]} , { XCoordinate: 500, YCoordinate: 0, MilesAmnt: 5000, CarCategory: 'blueCar', LicencePlate: 'LPH19N', AccelValue: 2, exhaust: [  ]} , { XCoordinate: 500, YCoordinate: 0, MilesAmnt: 5400, CarCategory: 'redCar', LicencePlate: 'RUL7DT', AccelValue: 2, exhaust: [  ]} , { XCoordinate: 500, YCoordinate: 0, MilesAmnt: 5800, CarCategory: 'greenCar', LicencePlate: '938TBB', AccelValue: 2, exhaust: [  ]} , { XCoordinate: 300, YCoordinate: 0, MilesAmnt: 6200, CarCategory: 'greenCar', LicencePlate: 'FOTOX8', AccelValue: 2, exhaust: [  ]} , { XCoordinate: 300, YCoordinate: 0, MilesAmnt: 6600, CarCategory: 'redCar', LicencePlate: 'UYKAFK', AccelValue: 2, exhaust: [  ]} , { XCoordinate: 500, YCoordinate: 0, MilesAmnt: 7000, CarCategory: 'redCar', LicencePlate: 'T9FVCX', AccelValue: 2, exhaust: [  ]} , { XCoordinate: 500, YCoordinate: 0, MilesAmnt: 7400, CarCategory: 'blueCar', LicencePlate: '194YSM', AccelValue: 2, exhaust: [  ]} 
];



function preload()
{
	var carTypes = [
		"detective",
		"redCar",
		"greenCar",
		"blueCar",
		"whiteCar",
	];

	for(var i = 0; i < carTypes.length; i++)
	{
		carImages[carTypes[i]] = loadImage("cars/" + carTypes[i] + ".png");
	}
}

function setup()
{
	createCanvas(800,800);

	roadWidth = 400;
	roadLeftEdge = 200;
	Lane_Pos_A = 300;
	Lane_Pos_B = 500;

	SleuthPIVehicle = 
	{
		XCoordinate: roadLeftEdge + roadWidth/4,
		YCoordinate: 550,
		MilesAmnt: 0,
		AccelValue: 3,
		VibrateValue: 0,
		CarCategory: 'detective',
		LicencePlate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);



	drawRoad();
	drawCars();

	////////////////////// HANDLE DETECTIVE /////////////////////////


	moveCar();
	var b2b = checkVehicleIsInfront( SleuthPIVehicle );
	if(b2b)changeLanes(SleuthPIVehicle);


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < Cars_Array.length; i++)
	{
		Cars_Array[i].MilesAmnt += Cars_Array[i].AccelValue;
		Cars_Array[i].YCoordinate = SleuthPIVehicle.YCoordinate - Cars_Array[i].MilesAmnt + SleuthPIVehicle.MilesAmnt;
	}

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
		roadLeftEdge + roadWidth/2 , i * 100 + (SleuthPIVehicle.MilesAmnt%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (SleuthPIVehicle.MilesAmnt%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(SleuthPIVehicle);
	image
	(
		carImages["detective"],
		SleuthPIVehicle.XCoordinate - carImages["detective"].width/2 + random(-SleuthPIVehicle.VibrateValue, SleuthPIVehicle.VibrateValue),
		SleuthPIVehicle.YCoordinate + random(-SleuthPIVehicle.VibrateValue, SleuthPIVehicle.VibrateValue)
	);

	//draw all other cars

	for(var i = 0; i < Cars_Array.length; i ++)
	{
		if(Cars_Array[i].YCoordinate < height && Cars_Array[i].YCoordinate > -height/2)
		{
			image(
			carImages[Cars_Array[i].CarCategory],
			Cars_Array[i].XCoordinate - carImages[Cars_Array[i].CarCategory].width/2,
			Cars_Array[i].YCoordinate
			);
			turnMotor(Cars_Array[i]);

			drawExhaust(Cars_Array[i]);
		}
	}

}

function turnMotor(car)
{

	car.exhaust.push({size: 2, x: car.XCoordinate, y: car.YCoordinate + carImages[car.CarCategory].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.AccelValue/3);
		if(car.CarCategory != "detective")car.exhaust[i].y += (SleuthPIVehicle.AccelValue - car.AccelValue);
		car.exhaust[i].x += random(-1,1);
		car.exhaust[i].size += 0.5;

		if(car.exhaust[i].y  > height || car.exhaust[i].y < 0)
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
