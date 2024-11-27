/*

Officer: 5560319
CaseNum: 701-2-58829019-5560319

Case 701 - Recognisable robber - stage 3

Kid you’re becoming a victim of your own success.
I just had a call from DI Max down at the precinct. He specifically requested your services.
They finally have a reliable witness for a robber who has been causing mayhem for some months.
Luckily they have a witness statement from gayla tintle. You know what to do kid.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function checkSuspectTraits(suspectObj){}
 - if()

Witness statement:

It all started when I was exiting the store. That's when I noticed them. Their expression seemed blank. They wore ---very thick glasses. I remember they had a ---dragon tattoo. It was so scary! They were fairly tall, I think between a height of ---162 and 180 cm. It was very dark and I could barely see, They had thin ----blond hair. I'll never forget their ---brown eyes. They seemed to be between the age of -------28 and 54 years old. They brobably weigh between ---58 and 90 kg. Can I go home now Sir? 

*/

var allSuspects = [
	{ 
		"name": "LINETTE DAVISWOOD",
		"eyes": "pale",
		"glasses": "cheap plastic",
		"hair": "ginger",
		"tattoo": "neck",
		"height": 186,
		"age": 36,
		"weight": 82
	},
	{ 
		"name": "MALINDA CROME",
		"eyes": "grey",
		"glasses": "white",
		"hair": "long white",
		"tattoo": "sword",
		"height": 165,
		"age": 39,
		"weight": 76
	},
	{ 
		"name": "PIERRE JACQUELIN",
		"eyes": "brown",
		"glasses": "light tan",
		"hair": "red",
		"tattoo": "anchor",
		"height": 183,
		"age": 50,
		"weight": 73
	},
	{ 
		"name": "DARBY TINTLE",
		"eyes": "brown",
		"glasses": "very thick",
		"hair": "thin blond",
		"tattoo": "dragon",
		"height": 174,
		"age": 32,
		"weight": 79
	},
	{ 
		"name": "JAUNITA MONKSFORD",
		"eyes": "blue",
		"glasses": "blue",
		"hair": "no",
		"tattoo": "facial",
		"height": 190,
		"age": 41,
		"weight": 71
	},
	{ 
		"name": "HANG PHINNEY",
		"eyes": "black",
		"glasses": "red",
		"hair": "shaved",
		"tattoo": "jellyfish",
		"height": 158,
		"age": 40,
		"weight": 74
	},
	{ 
		"name": "LARRAINE WILLMAR",
		"eyes": "green",
		"glasses": "black",
		"hair": "dark brown",
		"tattoo": "chinese lettering",
		"height": 168,
		"age": 37,
		"weight": 82
	}
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
	createCanvas(640,480);
	textFont(myFont);
}

// Declare your function here

function checkSuspectTraits(suspectObj){
    
  if(suspectObj.glasses == "very thick" &&
     suspectObj.tattoo =="dragon" &&
     suspectObj.height >=162 &&
     suspectObj.height <=180 &&
     suspectObj.hair == "thin blond" &&
     suspectObj.eyes == "brown" &&
     suspectObj.age >=28 && 
     suspectObj.age <= 54 &&
     suspectObj.weight >=58 &&
     suspectObj.weight<=90)
     {
     
     return true;
     
     }
    
     return false;
    
     }

function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < allSuspects.length; i++){
    let matchingProperties = checkSuspectTraits(allSuspects[i]);
    fill(50 * matchingProperties,250 - (50 * matchingProperties),0);
    text("found " + matchingProperties + " matching properties for " + allSuspects[i].name, 60, 60 + i * 20);
  }
}
