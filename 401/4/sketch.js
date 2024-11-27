/*

Officer: 5560319
CaseNum: 401-3-52996580-5560319

Case 401 - The Case of Norbert's Weiner Stand
Stage 4 - Mortal Cupcake

It seems that Norbert is getting desperate now. In what appears to be his final stand he has set up his own cupcake shop. The laced cupcakes look delicious but they are extremely dangerous. Just a brief whiff of one can induce a series of
deadly symptoms. This is Norbert’s most complex poison to date, so you’ll have to work hard to produce a viable antidote.

You must develop the antidote by using conditional statements in the draw loop to do the following.

	- When nerve_gas dips below 0.49, or on the other hand, polonium goes above 0.4 and amanita_mushrooms dips below 0.4, decrement methylene by 0.05
	- When botulinium goes above 0.72 and Deadly_Nightshade dips below 0.26, or on the other hand, cyanide dips below 0.73 or mercury dips below 0.27, increment methylene by 0.05
	- When polonium dips below 0.54 and cyanide goes above 0.64, whilst at the same time, chlorine dips below 0.27 or mercury goes above 0.64, try decreasing opioids by 0.02
	- If botulinium goes above 0.31 or Deadly_Nightshade dips below 0.36, whilst at the same time, nerve_gas goes above 0.55 and amanita_mushrooms dips below 0.28, raise opioids by 0.02
	- When either nerve_gas dips below 0.69, chlorine dips below 0.58, or perhaps botulinium goes above 0.62, try decreasing calcium_chloride by 0.03
	- If mercury goes above 0.32 or cyanide dips below 0.58, whilst at the same time, amanita_mushrooms goes above 0.51 or polonium goes above 0.41, increment calcium_chloride by 0.01
	- If chlorine goes above 0.63 and polonium dips below 0.45, or on the other hand, cyanide dips below 0.47 and botulinium dips below 0.54, try decreasing ethanol by 0.05
	- When amanita_mushrooms dips below 0.69 or nerve_gas dips below 0.53, whilst at the same time, Deadly_Nightshade goes above 0.74, increment ethanol by 0.03
	- If chlorine goes above 0.5 and amanita_mushrooms dips below 0.48, or on the other hand, mercury dips below 0.59 and polonium dips below 0.42, try decreasing insulin by 0.04
	- If cyanide dips below 0.33, or on the other hand, botulinium goes above 0.27 and nerve_gas goes above 0.25, increment insulin by 0.03


Your conditional statements should consider the following poisons:

	- amanita_mushrooms
	- polonium
	- mercury
	- Deadly_Nightshade
	- chlorine
	- cyanide
	- botulinium
	- nerve_gas


Your conditional statements should modify the following antidotes:

	- methylene
	- opioids
	- calcium_chloride
	- ethanol
	- insulin


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
var amanita_mushrooms;
var polonium;
var mercury;
var Deadly_Nightshade;
var chlorine;
var cyanide;
var botulinium;
var nerve_gas;


//Declare the antidote variables
var methylene;
var opioids;
var calcium_chloride;
var ethanol;
var insulin;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	amanita_mushrooms = 0.5;
	polonium = 0.5;
	mercury = 0.5;
	Deadly_Nightshade = 0.5;
	chlorine = 0.5;
	cyanide = 0.5;
	botulinium = 0.5;
	nerve_gas = 0.5;
	methylene = 0.5;
	opioids = 0.5;
	calcium_chloride = 0.5;
	ethanol = 0.5;
	insulin = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 8; i++)
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


if (nerve_gas < 0.49 || (polonium > 0.4 && amanita_mushrooms < 0.4)) {
    methylene -= 0.05;
  }

  if ((botulinium > 0.72 && Deadly_Nightshade < 0.26) || (cyanide < 0.73 || mercury < 0.27)) {
    methylene += 0.05;
  }

  if (
    polonium < 0.54 &&
    cyanide > 0.64 &&
    (chlorine < 0.27 || mercury > 0.64)
  ) {
    opioids -= 0.02;
  }

  if (
    (botulinium > 0.31 || Deadly_Nightshade < 0.36) &&
    (nerve_gas > 0.55 && amanita_mushrooms < 0.28)
  ) {
    opioids += 0.02;
  }

  if (nerve_gas < 0.69 || chlorine < 0.58 || botulinium > 0.62) {
    calcium_chloride -= 0.03;
  }

  if (
    (mercury > 0.32 || cyanide < 0.58) &&
    (amanita_mushrooms > 0.51 || polonium > 0.41)
  ) {
    calcium_chloride += 0.01;
  }

  if (
    (chlorine > 0.63 && polonium < 0.45) ||
    (cyanide < 0.47 && botulinium < 0.54)
  ) {
    ethanol -= 0.05;
  }

  if (
    (amanita_mushrooms < 0.69 || nerve_gas < 0.53) &&
    Deadly_Nightshade > 0.74
  ) {
    ethanol += 0.03;
  }

  if (
    (chlorine > 0.5 && amanita_mushrooms < 0.48) ||
    (mercury < 0.59 && polonium < 0.42)
  ) {
    insulin -= 0.04;
  }

  if (
    cyanide < 0.33 ||
    (botulinium > 0.27 && nerve_gas > 0.25)
  ) {
    insulin += 0.03;
  }

	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	amanita_mushrooms = nextValue(graphs[0],amanita_mushrooms);
	polonium = nextValue(graphs[1],polonium);
	mercury = nextValue(graphs[2],mercury);
	Deadly_Nightshade = nextValue(graphs[3],Deadly_Nightshade);
	chlorine = nextValue(graphs[4],chlorine);
	cyanide = nextValue(graphs[5],cyanide);
	botulinium = nextValue(graphs[6],botulinium);
	nerve_gas = nextValue(graphs[7],nerve_gas);


	methylene = constrain(methylene, 0, 1);
	opioids = constrain(opioids, 0, 1);
	calcium_chloride = constrain(calcium_chloride, 0, 1);
	ethanol = constrain(ethanol, 0, 1);
	insulin = constrain(insulin, 0, 1);


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
		color(0, 255, 255),
		color(255, 100, 100),
		color(255, 100, 0)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('amanita_mushrooms: ' + nf(amanita_mushrooms,1,2), 20,20);
	fill(colors[1]);
	text('polonium: ' + nf(polonium,1,2), 20,40);
	fill(colors[2]);
	text('mercury: ' + nf(mercury,1,2), 20,60);
	fill(colors[3]);
	text('Deadly_Nightshade: ' + nf(Deadly_Nightshade,1,2), 20,80);
	fill(colors[4]);
	text('chlorine: ' + nf(chlorine,1,2), 20,100);
	fill(colors[5]);
	text('cyanide: ' + nf(cyanide,1,2), 20,120);
	fill(colors[6]);
	text('botulinium: ' + nf(botulinium,1,2), 20,140);
	fill(colors[7]);
	text('nerve_gas: ' + nf(nerve_gas,1,2), 20,160);


	//draw the antidotes bar chart
	drawBar(methylene,50,'methylene');
	drawBar(opioids,200,'opioids');
	drawBar(calcium_chloride,350,'calcium_chloride');
	drawBar(ethanol,500,'ethanol');
	drawBar(insulin,650,'insulin');


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
