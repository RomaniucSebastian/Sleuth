/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 5560319
CaseNum: 201-3-36510320-5560319

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...

HINT: You should only need around 20 vertices to draw round the judge. Make sure you close your shape!

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  beginShape()
  endShape()
  vertex()

*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    // write the code to draw around the Judge's body below


  beginShape();
    
    vertex(610,90);
    vertex(660,250);
    vertex(422,313);
    vertex(380,340);
    vertex(410,456);
    vertex(490,422);
    vertex(515,440);
    vertex(680,370);
    vertex(692,424);
    vertex(792,429);
    vertex(774,388);
    vertex(723,398);
    vertex(735,356);
    vertex(756,348);
    vertex(761,318);
    vertex(784,296);
    vertex(750,215);
    vertex(701,197);
    vertex(661,68);
    vertex(610,90);
    
  endShape();
  

    //A helpful mouse pointer
	push();
        fill(0);
        noStroke();
        text(mouseX + "," + mouseY, mouseX,mouseY);
    pop();

}
