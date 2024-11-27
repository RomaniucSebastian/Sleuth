/*

Officer: 5560319
CaseNum: 202-3-89691598-5560319

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Medium Turquoise filled text with a Orange outline in RonsFont font (see https://www.w3.org/TR/css3-iccprof#numerical).
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.
  
  
  72,209,204 ---  Medium Turquoise
  
  255,165,0 --- orange stroke
  
  

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(536,532);
	textSize(31);
}

function draw()
{
	background(255);

//	fill(0,250,154);
//	stroke(255,215,0);
//	textFont(Melissa);
//	text("these", 258,93);
//	push();
//	fill(34,139,34);
//	stroke(0,255,127);
//	text("delays.", 406,93);
//	pop();
//	stroke(75,0,130);
//	textFont(Diggity);
//	text("?", 264,131);
//	fill(64,224,208);
//	stroke(128,0,128);
//	textFont(RonsFont);
//	text("sure", 358,131);
//	fill(173,255,47);
//	stroke(0,139,139);
//	textFont(Ballpointprint);
//	text("b", 281,235);
//	push();
//	fill(210,105,30);
//	stroke(0,0,255);
//	textFont(Diggity);
//	text("short", 162,266);
//	pop();
//	stroke(128,0,128);
//	text("I", 90,169);
//	fill(238,130,238);
//	stroke(46,139,87);
//	textFont(Diggity);
//	text("so,", 400,266);
//	fill(153,50,204);
//	stroke(128,128,0);
//	textFont(Ballpointprint);
//	text("me", 277,201);
//	fill(128,128,0);
//	stroke(32,178,170);
//	textFont(Diggity);
//	text("a", 256,235);
//	fill(255,140,0);
//	stroke(0,128,0);
//	textFont(Ballpointprint);
//	text("can", 22,93);
//	fill(240,230,140);
//	stroke(255,165,0);
//	text("reak", 296,235);
//	fill(0,0,255);
//	stroke(50,205,50);
//	textFont(Diggity);
//	text("I", 436,266);
//	fill(178,34,34);
//	stroke(165,42,42);
//	textFont(RonsFont);
//	text("My", 17,31);
//	push();
//	fill(220,20,60);
//	textFont(Melissa);
//	text("you", 169,201);
//	pop();
//	fill(123,104,238);
//	textFont(Ballpointprint);
//	text("and", 360,235);
//	fill(72,209,204);
//	stroke(255,165,0);
//	textFont(RonsFont);
	text("safe", 201,131);
//	push();
//	fill(139,69,19);
//	stroke(255,69,0);
//	textFont(Diggity);
//	text("this", 465,235);
//	pop();
//	text("ignore", 170,93);
//	text("the", 406,169);
//	fill(139,0,0);
//	stroke(255,140,0);
//	textFont(Melissa);
//	text("x", 79,427);
//	fill(135,206,250);
//	stroke(255,0,255);
//	textFont(Diggity);
//	text("Is", 469,93);
//	fill(0,128,0);
//	stroke(178,34,34);
//	textFont(Ballpointprint);
//	text("of", 228,266);
//	fill(34,139,34);
//	textFont(Diggity);
//	text("guarded", 238,303);
//	fill(173,255,47);
//	stroke(0,0,205);
//	textFont(Melissa);
//	text("I'm", 288,131);
//	fill(255,215,0);
//	stroke(128,0,0);
//	text("ing", 247,201);
//	fill(128,0,128);
//	stroke(255,255,0);
//	textFont(Diggity);
//	text("I", 7,93);
//	fill(0,255,255);
//	stroke(0,0,128);
//	textFont(Melissa);
//	text("avoid", 203,201);
//	fill(218,165,32);
//	stroke(127,255,0);
//	textFont(Ballpointprint);
//	text("Are", 111,201);
//	stroke(0,206,209);
//	textFont(Diggity);
//	text("?", 351,266);
//	fill(244,164,96);
//	stroke(0,0,139);
//	text("no", 71,93);
//	fill(72,209,204);
//	stroke(255,165,0);
//	textFont(RonsFont);
	text("take", 182,169);
//	fill(65,105,225);
//	stroke(128,0,0);
//	textFont(Ballpointprint);
//	text("Forever", 17,365);
//	fill(50,205,50);
//	stroke(139,0,0);
//	textFont(Melissa);
//	text("Bob,", 161,31);
//	fill(238,130,238);
//	stroke(178,34,34);
//	text("how", 432,131);
//	fill(219,112,147);
//	stroke(210,105,30);
//	text("s,", 382,169);
//	fill(75,0,130);
//	stroke(0,250,154);
//	textFont(Diggity);
//	text("longer", 104,93);
//	fill(135,206,250);
//	stroke(0,0,139);
//	text("go", 104,235);
//	fill(138,43,226);
//	stroke(0,0,205);
//	textFont(RonsFont);
//	text("Daisy", 7,427);
//	fill(255,0,255);
//	stroke(0,128,0);
//	textFont(Diggity);
//	text("continual", 313,93);
//	fill(255,105,180);
//	stroke(0,0,205);
//	textFont(RonsFont);
//	text("more", 13,169);
//	fill(127,255,212);
//	stroke(0,128,128);
//	textFont(Melissa);
//	text("send", 9,303);
//	push();
//	fill(0,0,205);
//	stroke(218,165,32);
//	textFont(RonsFont);
//	text("should", 12,235);
//	pop();
//	fill(72,209,204);
//	stroke(255,165,0);
//	textFont(RonsFont);
	text("cash", 55,303);
//	push();
//	fill(0,0,205);
//	stroke(139,0,0);
//	textFont(Ballpointprint);
//	text("our", 26,131);
//	pop();
//	fill(107,142,35);
//	stroke(0,100,0);
//	textFont(Ballpointprint);
//	text("?", 325,201);
//	fill(0,100,0);
//	stroke(124,252,0);
//	text("relationship", 70,131);
//	fill(139,69,19);
//	stroke(184,134,11);
//	text("Perhaps", 359,201);
//	fill(148,0,211);
//	stroke(255,0,0);
//	textFont(RonsFont);
//	text("for", 202,235);
//	fill(0,0,139);
//	stroke(139,69,19);
//	textFont(Melissa);
//	text("much", 473,131);
//	push();
//	fill(135,206,235);
//	textFont(Ballpointprint);
//	text("money", 270,266);
//	pop();
//	fill(0,255,255);
//	stroke(0,100,0);
//	textFont(RonsFont);
//	text("silence.", 17,201);
//	push();
//	fill(0,128,128);
//	stroke(160,82,45);
//	textFont(Melissa);
//	text("out.", 34,266);
//	pop();
//	fill(139,0,0);
//	textFont(Diggity);
//	text("The", 277,169);
//	fill(255,69,0);
//	stroke(50,205,50);
//	textFont(Melissa);
//	text("so", 210,303);
//	fill(0,191,255);
//	stroke(218,165,32);
//	textFont(Diggity);
//	text("?", 253,169);
//	push();
//	fill(124,252,0);
//	stroke(34,139,34);
//	textFont(RonsFont);
//	text("Are", 70,266);
//	pop();
//	stroke(220,20,60);
//	text("can", 451,266);
//	fill(255,0,255);
//	stroke(0,0,128);
//	textFont(Melissa);
//	text("You", 117,303);
//	push();
//	fill(107,142,35);
//	stroke(0,0,255);
//	textFont(Ballpointprint);
//	text("sometimes.", 329,303);
//	pop();
//	fill(173,255,47);
//	textFont(RonsFont);
//	text("are", 154,303);
//	push();
//	fill(173,216,230);
//	stroke(153,50,204);
//	text("we", 460,201);
//	pop();
//	fill(139,69,19);
//	stroke(153,50,204);
//	textFont(Melissa);
//	text("you", 128,266);
//	push();
//	fill(255,140,0);
//	stroke(165,42,42);
//	textFont(Ballpointprint);
//	text("sort", 414,235);
//	pop();
//	fill(0,100,0);
//	stroke(178,34,34);
//	textFont(RonsFont);
//	text("can", 128,169);
//	push();
//	fill(255,127,80);
//	stroke(0,255,127);
//	text("darling", 63,31);
//	pop();
//	fill(154,205,50);
//	stroke(255,165,0);
//	textFont(Melissa);
//	text("yours,", 119,365);
//	fill(205,133,63);
//	stroke(25,25,112);
//	text("all", 11,266);
//	fill(0,206,209);
//	stroke(255,0,0);
//	text("If", 375,266);
//	fill(205,133,63);
//	stroke(165,42,42);
//	text("not", 323,131);
//	fill(0,128,128);
//	stroke(50,205,50);
//	textFont(Ballpointprint);
//	text("away", 136,235);
//	fill(233,150,122);
//	stroke(184,134,11);
//	textFont(Melissa);
//	text("secret", 326,169);



}
