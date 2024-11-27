/*

Officer: 5560319
CaseNum: 501-1-36313581-5560319

Case 501 - Max Von Neuman - stage 2

Madame McCarthy says that to summon Max Von Neuman a different approach is needed.
Follow her advice below.

How young Max loved to march with his toy soldiers.
To speak to Max beyond the grave you must place a toy soldier in each of the dashed circles.
Use the image() and the soldierImg variable command to place each soldier in its position.
You will need to use a separate for loop for each of the diagonal lines.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

 * for()
 * image()

*/

var backgroundImg, soldierImg;

function preload() {
    backgroundImg = loadImage("background.jpg");
    soldierImg = loadImage("Soldier.png");
}

function setup() {
    createCanvas(backgroundImg.width, backgroundImg.height);
    image(backgroundImg, 0, 0);

    imageMode(CENTER);
}

function draw() {
    // add your for loop below
    for(var i=0; i<9; i++){
  image(soldierImg,404 + i*36,325 + i*28);

}
     for(var i=0; i<6; i++){
  image(soldierImg,630 + i*33,477 - i*37);
    }
}
