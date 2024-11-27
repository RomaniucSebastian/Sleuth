/*

Officer: 5560319
CaseNum: 502-3-75883361-5560319

Case 502 - A donation - stage 4

This final document will seal the deal. C’mon kid, let’s send these crooks down.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.


*/


var redactedText;

// data structures to be referenced in redactedText
var AExcerpt = [
{
	component0: {redacted0: "smile", redacted1: "sneeze", redacted2: "bake", redacted3: "mend"}, 
	component1: {redacted0: "Governor Zuckerberg", redacted1: "succeed", redacted2: "sail", redacted3: "charge"}, 
	component2: {redacted0: "tug", redacted1: "hurry", redacted2: "sneeze", redacted3: "consider"}
},
{
	component0: {redacted0: "clip", redacted1: "tug", redacted2: "radiate", redacted3: "rejoice"}, 
	component1: {redacted0: "meddle", redacted1: "mend", redacted2: "sail", redacted3: "charge"}, 
	component2: {redacted0: "succeed", redacted1: "charge", redacted2: "radiate", redacted3: "smile"}
},
{
	component0: {redacted0: "sail", redacted1: "plug", redacted2: "play", redacted3: "plug"}, 
	component1: {redacted0: "sneeze", redacted1: "$200,000", redacted2: "rejoice", redacted3: "play"}, 
	component2: {redacted0: "succeed", redacted1: "radiate", redacted2: "mend", redacted3: "bake"}
},
{
	component0: {redacted0: "plug", redacted1: "clip", redacted2: "tug", redacted3: "bake"}, 
	component1: {redacted0: "start", redacted1: "rejoice", redacted2: "plug", redacted3: "stuff"}, 
	component2: {redacted0: "consider", redacted1: "succeed", redacted2: "sneeze", redacted3: "fence"}
},
{
	component0: {redacted0: "smile", redacted1: "stuff", redacted2: "donation", redacted3: "smile"}, 
	component1: {redacted0: "bake", redacted1: "play", redacted2: "plug", redacted3: "sneeze"}, 
	component2: {redacted0: "charge", redacted1: "fence", redacted2: "Edsger", redacted3: "bake"}
}];

var BExcerpt = [
{
	component0: {redacted0: "radiate", redacted1: "development", redacted2: "sail", redacted3: "start"}, 
	component1: {redacted0: "ALGOL fish wholesalers", redacted1: "fence", redacted2: "play", redacted3: "fence"}, 
	component2: {redacted0: "mend", redacted1: "plug", redacted2: "start", redacted3: "start"}
},
{
	component0: {redacted0: "start", redacted1: "protect", redacted2: "charge", redacted3: "smile"}, 
	component1: {redacted0: "charge", redacted1: "sail", redacted2: "start", redacted3: "charge"}, 
	component2: {redacted0: "protect", redacted1: "protect", redacted2: "COBOL", redacted3: "sail"}
},
{
	component0: {redacted0: "radiate", redacted1: "succeed", redacted2: "radiate", redacted3: "tug"}, 
	component1: {redacted0: "consider", redacted1: "protect", redacted2: "rejoice", redacted3: "bake"}, 
	component2: {redacted0: "start", redacted1: "fence", redacted2: "bake", redacted3: "hurry"}
},
{
	component0: {redacted0: "fence", redacted1: "fence", redacted2: "tug", redacted3: "sail"}, 
	component1: {redacted0: "start", redacted1: "bake", redacted2: "fence", redacted3: "syndicate"}, 
	component2: {redacted0: "smile", redacted1: "hurry", redacted2: "rejoice", redacted3: "hurry"}
},
{
	component0: {redacted0: "sneeze", redacted1: "smile", redacted2: "plug", redacted3: "tug"}, 
	component1: {redacted0: "meddle", redacted1: "radiate", redacted2: "tug", redacted3: "bake"}, 
	component2: {redacted0: "you", redacted1: "meddle", redacted2: "ALGOL", redacted3: "mend"}
}];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280, 800);

  // replace all redacted words with the correct values from the data structures above
  redactedText = "My dearest " + AExcerpt[4].component2.redacted2 + ", I have just received your very generous " + AExcerpt[4].component0.redacted2 + " of " + AExcerpt[2].component1.redacted1 + ". Thank you. This will be invaluable to our campaign. " + BExcerpt[4].component2.redacted2 + " is a stalwart part of the community and I look forward to continuing our strong partnership in the future. Regard the other matter, I think you will find that all has been satisfactorily dealt with. Just read this morning’s front pages. You can rest assured that no mention was made of " + BExcerpt[4].component2.redacted0 + " or " + BExcerpt[0].component1.redacted0 + " to the " + BExcerpt[3].component1.redacted3 + ". Your new " + BExcerpt[0].component0.redacted1 + " at the " + BExcerpt[1].component2.redacted2 + " can now proceed without impediment. Yours sincerely, " + AExcerpt[0].component1.redacted0 + ""

   

}

function draw()
{
  // you don't need to change this
  image(backgroundImg, 0, 0);
  stroke(0);
  strokeWeight(3);
  line(width/2, 10, width/2, height - 10);
  noStroke();
  textFont(myFont);
  textSize(14);
  text(redactedText, 30, 100, 580, 600);
  text("Edsger, donation, $200,000, ALGOL, you, ALGOL fish wholesalers, syndicate, development, COBOL, Governor Zuckerberg", 670, 100, 580, 600);
}
