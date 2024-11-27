/*

Officer: 5560319
CaseNum: 701-1-84696022-5560319

Case 701 - Credible cat thief - stage 2

Kid they need you down at the precinct again.
This time it's a sneaky cat thief who has been absconding with the neighbourhoods felines for some time.
Luckily old Mrs Olivetti caught a glimpse of them as they disappeared over her back fence.
We’ve a bunch of likely characters lined-up but we need your brains to solve the mystery.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function matchSuspect(suspectObj){}
 - if()

Witness statement:

It all started when I was exiting the store. That's when I noticed them. They had long white hair. By the look of them they were younger than ---66. It's hard to say. I distinctly remember that they were wearing a ---fur vest, I remember thinking that was quite unusual. It's so hard to remember right now. They were quite big, they probably weigh more than ----66 Kg. They wore ----white glasses. Their expression seemed -----empty. That's all I know officer. 

*/

var usualSuspects = [
	{ 
		"name": "MAJORIE TINTLE",
		"expression": "confused",
		"glasses": "red",
		"item": "pink scarf",
		"age": 72,
		"weight": 92
	},
	{ 
		"name": "DRUSILLA WILLMAR",
		"expression": "empty",
		"glasses": "white",
		"item": "fur vest",
		"age": 58,
		"weight": 71
	},
	{ 
		"name": "BRIDGET JACQUELIN",
		"expression": "sad",
		"glasses": "blue",
		"item": "red necktie",
		"age": 63,
		"weight": 100
	},
	{ 
		"name": "DEEDEE ZETLAND",
		"expression": "menacing",
		"glasses": "light tan",
		"item": "dotted necktie",
		"age": 21,
		"weight": 62
	},
	{ 
		"name": "BRAD MAUBERT",
		"expression": "angry",
		"glasses": "very thick",
		"item": "purple hat",
		"age": 47,
		"weight": 73
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
function matchSuspect(suspectObj){
   if(suspectObj.age < 66 &&
      suspectObj.item == "fur vest" &&
      suspectObj.weight > 66 &&
      suspectObj.glasses == "white" &&
      suspectObj.expression == "empty")
       
   {
      
    return true;
      
    } 
      return false;
    }
function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < usualSuspects.length; i++){
    if(matchSuspect(usualSuspects[i]) == true){
      fill(255,0,0);
      text(usualSuspects[i].name + " is guilty!", 60, 60 + i * 20);
    }else{
      fill(0,155,0);
      text(usualSuspects[i].name + " is not guilty", 60, 60 + i * 20 );
    }
  }
}
