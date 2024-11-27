/*

Officer: 5560319
CaseNum: 502-1-42429232-5560319

Case 502 - A delicate matter - stage 2

We’re hot on the trail kid, and another document has come my way. This message is a little more tricky to decipher, but I know you can do it.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.

*/

var redactedText;

// data structures to be referenced in redactedText
var paperA = [
	{detail0: "capital", detail1: "play", detail2: "succeed"}, 
	{detail0: "plug", detail1: "syndicate", detail2: "meddle"}, 
	{detail0: "she has", detail1: "play", detail2: "charge"}, 
	{detail0: "bake", detail1: "meddle", detail2: "mend"}, 
	{detail0: "bake", detail1: "smile", detail2: "plug"}, 
	{detail0: "start", detail1: "protect", detail2: "sneeze"}, 
	{detail0: "smile", detail1: "plug", detail2: "romantic"}, 
	{detail0: "Governor Zuckerberg", detail1: "tug", detail2: "mend"}, 
	{detail0: "hurry", detail1: "protect", detail2: "stuff"}, 
	{detail0: "charge", detail1: "COBOL", detail2: "clip"}
];

var paperB = [
	{detail0: "sail", detail1: "consider", detail2: "clip"}, 
	{detail0: "bake", detail1: "Edsger", detail2: "delicate"}, 
	{detail0: "smile", detail1: "charge", detail2: "fence"}, 
	{detail0: "smile", detail1: "succeed", detail2: "clip"}, 
	{detail0: "meddle", detail1: "Hopper’s", detail2: "radiate"}, 
	{detail0: "start", detail1: "tug", detail2: "a donation"}, 
	{detail0: "radiate", detail1: "stuff", detail2: "charge"}, 
	{detail0: "sail", detail1: "stuff", detail2: "radiate"}, 
	{detail0: "start", detail1: "sneeze", detail2: "hurry"}, 
	{detail0: "consider", detail1: "protect", detail2: "fence"}
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280,800);

  // replace all redacted words with the correct values from the data structures above
  redactedText = "My dearest " + paperB [1].detail1 + ", Please don’t doubt my sincerity when I say that I hadn’t the faintest idea about " + paperB [4].detail1 + ", intervention. I suspect that " + paperA [2].detail0 + ", a " + paperA [6].detail2 + ", interest at the " + paperA [9].detail1 + ",. I and the " + paperA [1].detail1 + ", appreciate your many contributions over the years. However, this is a most " + paperB [1].detail2 + ", matter which would require significant " + paperA [0].detail0 + ", for me to deal with it satisfactorily. I would not be so crude as to suggest a sum but perhaps " + paperB [5].detail2 + " to my forthcoming campaign would help. Yours sincerely, " + paperA [7].detail0 + "";

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
  text("Edsger, Hopper’s, she has, romantic, COBOL, syndicate, delicate, capital, a donation, Governor Zuckerberg", 670, 100, 580, 600);
}
