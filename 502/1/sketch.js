/*

Officer: 5560319
CaseNum: 502-0-54466902-5560319

Case 502 - Old friends - stage 1

Corruption is everywhere in Console City, and the cops are no exception. I’ve managed to lay my hands on some government censored documents, and I think they lead to a trail of corruption that goes all the way to the top. However, the key parts have been redacted. Luckily a source of mine has sent me redacted words in the very order that they appear in the document. 

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.

*/

var redactedText;

// data structures to be referenced in redactedText
var APaper = ["Lovelace", "Governor Zuckerberg", "clean up", "affair", "Cobol Theatre"];

var BPaper = ["Algol Fish Wholesalers", "Edsger", "Judge Hopper", "Torvalds", "supply of fish"];

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
  redactedText = "Dear "+ APaper [1]+", I am writing to you with much confusion and distress. As you know my company "+ BPaper [0]+" has been a bastion of the community. Over the years we have provided many jobs for the people of Console City. We’ve kept the city in a good "+ BPaper [4]+". We even paid some tax once. Now I find that our efforts to open a new plant opposite the "+ APaper [4]+" is being blocked by your very own "+ BPaper [2]+". Did I not help you "+ APaper [2]+" the mess after "+ BPaper [3]+" ? Did I not keep quiet about your "+ APaper [3]+" with "+ APaper [0]+"? Contact me discreetly and with haste. Some arrangement must be found. Your old friend, "+ BPaper [1]+" ";

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
  text("Governor Zuckerberg, Algol Fish Wholesalers, supply of fish, Cobol Theatre, Judge Hopper, clean up, Torvalds, affair, Lovelace, Edsger", 670, 100, 580, 600);
}
