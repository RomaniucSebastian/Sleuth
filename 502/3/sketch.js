/*

Officer: 5560319
CaseNum: 502-2-58901987-5560319

Case 502 - Out of the picture - stage 3

Yet another document has come my way. This one is even more tricky to decipher.
The Governor must really have something to hide.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.

*/

var redactedText;

// arrays to be referenced in redactedText
var A_paper = {
	element_0: [ "mend", "stuff", "mend"], 
	element_1: [ "mend", "radiate", "consider"], 
	element_2: [ "consider", "sail", "sail"], 
	element_3: [ "succeed", "charge", "fence"], 
	element_4: [ "a donation", "sail", "start"], 
	element_5: [ "plug", "start", "sail"], 
	element_6: [ "Hopper", "consider", "smile"], 
	element_7: [ "rejoice", "mend", "charge"], 
	element_8: [ "ALGOL", "clip", "fence"], 
	element_9: [ "consider", "radiate", "bake"]
};

var B_paper = {
	element_0: [ "bake", "hurry", "protect"], 
	element_1: [ "clip", "fence", "radiate"], 
	element_2: [ "sail", "succeed", "hurry"], 
	element_3: [ "sneeze", "hurry", "meddle"], 
	element_4: [ "syndicate", "bake", "hit"], 
	element_5: [ "succeed", "Governor Zuckerberg", "$200,000"], 
	element_6: [ "rejoice", "Edsger", "succeed"], 
	element_7: [ "sneeze", "campaign", "rejoice"], 
	element_8: [ "smile", "clip", "stuff"], 
	element_9: [ "charge", "start", "fence"]
};

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
  redactedText = "Dear " + B_paper.element_5[1] + ", I am sure that something could be worked out in terms of " + A_paper.element_4[0] + " for your " + B_paper.element_7[1] + ". How does " + B_paper.element_5[2] + " sound ? I am afraid I will need to be so crude as to spell out what ALGOL requires in return. " + A_paper.element_6[0] + " needs to be out of the picture. She’s caused enough trouble. Get the " + B_paper.element_4[0] + " to organise the " + B_paper.element_4[2] + " but I’d prefer it you don’t mention me or " + A_paper.element_8[0] + ". I owe them enough favours already. Your old friend, " + B_paper.element_6[1] + "";

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
  text("Governor Zuckerberg, a donation, campaign, $200,000, Hopper, syndicate, hit, ALGOL, Edsger", 670, 100, 580, 600);
}
