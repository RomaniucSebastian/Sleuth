/*

Officer: 5560319
CaseNum: 401-1-69618921-5560319

Case 401 - The Case of Norbert's Weiner Stand
Stage 2 - Toxic Burrito

Norbert is at it again. This time he’s set up a burrito stall and is lacing burritos with his foul toxin. The chaos is spreading. People are dropping like flies and burrito sales have fallen through the floor. To make matters worse it seems Norbert has cottoned on to our methods and has upped the complexity of his poison. You’ll find the antidote harder to develop this time. So kid, head down to the lab and get working.

You must develop the antidote by using conditional statements in the draw loop to do the following:

	- When insecticide dips below 0.4 or formaldehyde goes above 0.63, reduce insulin by 0.05
	- When AmanitaMushrooms dips below 0.63 and spiderVenom dips below 0.4, raise insulin by 0.04
	- When spiderVenom dips below 0.62, reduce Hydrochloric_Acid by 0.02
	- If insecticide dips below 0.38 or AmanitaMushrooms dips below 0.57, increase Hydrochloric_Acid by 0.03
	- If AmanitaMushrooms goes above 0.35, decrement charcoal by 0.03
	- If spiderVenom goes above 0.37, increment charcoal by 0.01
	- If formaldehyde goes above 0.46 or insecticide dips below 0.54, try decreasing opioids by 0.01
	- If AmanitaMushrooms goes above 0.64 or spiderVenom dips below 0.49, try increasing opioids by 0.01


Your conditional statements should consider the following poisons:

	- insecticide
	- spiderVenom
	- formaldehyde
	- AmanitaMushrooms


Your conditional statements should modify the following antidotes:

	- insulin
	- Hydrochloric_Acid
	- charcoal
	- opioids


- There are many ways to complete this task but you should only use the following commands and operators:

	if(){}
	>
	<
	&&
	||
	+=
	-=

*/

//Declare the poison variables
var insecticide;
var spiderVenom;
var formaldehyde;
var AmanitaMushrooms;


//Declare the antidote variables
var insulin;
var Hydrochloric_Acid;
var charcoal;
var opioids;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	insecticide = 0.5;
	spiderVenom = 0.5;
	formaldehyde = 0.5;
	AmanitaMushrooms = 0.5;
	insulin = 0.5;
	Hydrochloric_Acid = 0.5;
	charcoal = 0.5;
	opioids = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 4; i++)
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



     // When insecticide dips below 0.4 or formaldehyde goes above 0.63, reduce insulin by 0.05
    
    if (insecticide < 0.4 || formaldehyde > 0.63) {
        insulin -= 0.05;
    }

    // When AmanitaMushrooms dips below 0.63 and spiderVenom dips below 0.4, raise insulin by 0.04
    
    if (AmanitaMushrooms < 0.63 && spiderVenom < 0.4) 
    {
        insulin += 0.04;
    }

    // When spiderVenom dips below 0.62, reduce Hydrochloric_Acid by 0.02
    
    if (spiderVenom < 0.62) 
    {
        Hydrochloric_Acid -= 0.02;
    }

    // If insecticide dips below 0.38 or AmanitaMushrooms dips below 0.57, increase Hydrochloric_Acid by 0.03
    
    if (insecticide < 0.38 || AmanitaMushrooms < 0.57) 
    {
        Hydrochloric_Acid += 0.03;
    }

    // If AmanitaMushrooms goes above 0.35, decrement charcoal by 0.03
    
    if (AmanitaMushrooms > 0.35) 
    {
        charcoal -= 0.03;
    }

    // If spiderVenom goes above 0.37, increment charcoal by 0.01
    
    if (spiderVenom > 0.37) 
    {
        charcoal += 0.01;
    }


    // If formaldehyde goes above 0.46 or insecticide dips below 0.54, try decreasing opioids by 0.01
    
    if (formaldehyde > 0.46 || insecticide < 0.54) 
    {
        opioids -= 0.01;
    }

    // If AmanitaMushrooms goes above 0.64 or spiderVenom dips below 0.49, try increasing opioids by 0.01
    
    if (AmanitaMushrooms > 0.64 || spiderVenom < 0.49) 
    {
        opioids += 0.01;
    }
    

	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	insecticide = nextValue(graphs[0],insecticide);
	spiderVenom = nextValue(graphs[1],spiderVenom);
	formaldehyde = nextValue(graphs[2],formaldehyde);
	AmanitaMushrooms = nextValue(graphs[3],AmanitaMushrooms);


	insulin = constrain(insulin, 0, 1);
	Hydrochloric_Acid = constrain(Hydrochloric_Acid, 0, 1);
	charcoal = constrain(charcoal, 0, 1);
	opioids = constrain(opioids, 0, 1);


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
	text('insecticide: ' + nf(insecticide,1,2), 20,20);
	fill(colors[1]);
	text('spiderVenom: ' + nf(spiderVenom,1,2), 20,40);
	fill(colors[2]);
	text('formaldehyde: ' + nf(formaldehyde,1,2), 20,60);
	fill(colors[3]);
	text('AmanitaMushrooms: ' + nf(AmanitaMushrooms,1,2), 20,80);


	//draw the antidotes bar chart
	drawBar(insulin,50,'insulin');
	drawBar(Hydrochloric_Acid,200,'Hydrochloric_Acid');
	drawBar(charcoal,350,'charcoal');
	drawBar(opioids,500,'opioids');


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
