/*

Officer: 5560319
CaseNum: 401-2-58069487-5560319

Case 401 - The Case of Norbert's Weiner Stand
Stage 3 - Bilious bagel

As I suspected Norbert has struck again. Ever inventive he’s set up a bagel stand and has laced the cream cheese with an ingenious but vicious toxin. This one is quite deadly so get yourself down to the lab right away.

You must develop the antidote by using conditional statements in the draw loop to do the following.

	- When snakeVenom goes above 0.5 or SpiderVenom dips below 0.56, whilst at the same time, lead dips below 0.29, reduce CalciumGluconate by 0.05
	- When novichok goes above 0.71 or methanol goes above 0.4, increment CalciumGluconate by 0.01
	- If methanol dips below 0.69 and novichok dips below 0.5, decrement calcium_chloride by 0.05
	- If snakeVenom goes above 0.39 and lead goes above 0.69, increase calcium_chloride by 0.01
	- When either snakeVenom dips below 0.58, SpiderVenom dips below 0.55, or perhaps lead goes above 0.74, decrease charcoal by 0.05
	- If AmanitaMushrooms goes above 0.25 or novichok goes above 0.66, whilst at the same time, methanol goes above 0.57, raise charcoal by 0.03
	- When AmanitaMushrooms dips below 0.42 and lead goes above 0.32, or on the other hand, snakeVenom dips below 0.59, decrease ethanol by 0.03
	- When methanol goes above 0.55 and novichok goes above 0.35, try increasing ethanol by 0.02


Your conditional statements should consider the following poisons:

	- lead
	- AmanitaMushrooms
	- SpiderVenom
	- snakeVenom
	- methanol
	- novichok


Your conditional statements should modify the following antidotes:

	- CalciumGluconate
	- calcium_chloride
	- charcoal
	- ethanol


- There are many ways to complete this task but you should only use the following commands:

	if(){}
	>
	<
	&&
	||
	+=
	-=

*/

//Declare the poison variables
var lead;
var AmanitaMushrooms;
var SpiderVenom;
var snakeVenom;
var methanol;
var novichok;


//Declare the antidote variables
var CalciumGluconate;
var calcium_chloride;
var charcoal;
var ethanol;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	lead = 0.5;
	AmanitaMushrooms = 0.5;
	SpiderVenom = 0.5;
	snakeVenom = 0.5;
	methanol = 0.5;
	novichok = 0.5;
	CalciumGluconate = 0.5;
	calcium_chloride = 0.5;
	charcoal = 0.5;
	ethanol = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 6; i++)
	{
		graphs.push([]);
		for(var j = 0; j < 512; j++)
		{
			graphs[i].push(0.5);
		}
	}

}

function draw()
{

	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ...


if ((snakeVenom > 0.5 || SpiderVenom < 0.56) && lead < 0.29)
{
  CalciumGluconate -= 0.05;
}

    
if (novichok > 0.71 || methanol > 0.4)
{
  CalciumGluconate += 0.01;
}
    

if (methanol < 0.69 && novichok < 0.5)
{
  calcium_chloride -= 0.05;
}
    

if (snakeVenom > 0.39 && lead > 0.69) 
{
  calcium_chloride += 0.01;
}
    

if (snakeVenom < 0.58 || SpiderVenom < 0.55 || lead > 0.74) {
  charcoal -= 0.05;
}

if ((AmanitaMushrooms > 0.25 || novichok > 0.66) && methanol > 0.57) 
{
  charcoal += 0.03;
}

    
if ((AmanitaMushrooms < 0.42 && lead > 0.32) || snakeVenom < 0.59)
{
  ethanol -= 0.03;
}

    
if (methanol > 0.55 && novichok > 0.35) 
{
  ethanol += 0.02;
}


    
	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	lead = nextValue(graphs[0],lead);
	AmanitaMushrooms = nextValue(graphs[1],AmanitaMushrooms);
	SpiderVenom = nextValue(graphs[2],SpiderVenom);
	snakeVenom = nextValue(graphs[3],snakeVenom);
	methanol = nextValue(graphs[4],methanol);
	novichok = nextValue(graphs[5],novichok);


	CalciumGluconate = constrain(CalciumGluconate, 0, 1);
	calcium_chloride = constrain(calcium_chloride, 0, 1);
	charcoal = constrain(charcoal, 0, 1);
	ethanol = constrain(ethanol, 0, 1);


	///////// DO NOT CHANGE THE CODE BELOW ///////////

	//drawing code

	// set background
	background(0);
	noFill();

	//draw the graphs for the vitals
	var colors = [
	color(255, 0, 0),
	color(0, 255, 0),
	color(0, 0, 255),
	color(255, 0, 255),
	color(255, 255, 0),
	color(0, 255, 255)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('lead: ' + nf(lead,1,2), 20,20);
	fill(colors[1]);
	text('AmanitaMushrooms: ' + nf(AmanitaMushrooms,1,2), 20,40);
	fill(colors[2]);
	text('SpiderVenom: ' + nf(SpiderVenom,1,2), 20,60);
	fill(colors[3]);
	text('snakeVenom: ' + nf(snakeVenom,1,2), 20,80);
	fill(colors[4]);
	text('methanol: ' + nf(methanol,1,2), 20,100);
	fill(colors[5]);
	text('novichok: ' + nf(novichok,1,2), 20,120);


	//draw the antidotes bar chart
	drawBar(CalciumGluconate,50,'CalciumGluconate');
	drawBar(calcium_chloride,200,'calcium_chloride');
	drawBar(charcoal,350,'charcoal');
	drawBar(ethanol,500,'ethanol');


}

function nextValue(graph, val)
{
	//gets the next value for a vital and puts it in an array for drawing
	var delta = random(-0.03,0.03);

	val += delta;
	if(val > 1 || val < 0)
	{
		delta *= -1;
		val += delta * 2;
	}

	graph.push(val)
	graph.shift();
	return val;
}

function drawGraph(graph)
{
	//draws an array as a graph
	beginShape();
	for(var i = 0; i < graph.length; i++)
	{
			vertex(width * i/512, height * 0.5 - graph[i]* height/3)
	}
	endShape();
}


function drawBar(val, x, name)
{
	//draws the bars for bar chart
    noStroke();
    fill(0,100,100);
	var mh = height * 0.4 - 50;
	rect(x,(height - 50) - val*mh, 100, val*mh);
    fill(255);
	text(name + ": " + val, x, height - 20);
}
