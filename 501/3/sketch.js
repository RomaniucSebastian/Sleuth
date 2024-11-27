/*

Officer: 5560319
CaseNum: 501-2-48570326-5560319

Case 501 - Marrieta Von Neuman - stage 3

For Marrieta a different approach is needed again.
Follow Madame McCarthy’s advice below.

Marrieta was a doting mother but she was also mean player of dice.
To speak to Marrieta beyond the grave you must place a dice in each of the dashed circles.
Use the image() and the itemImg variable command to place each dice in its position.
You will need to use two for loops in a nested pattern to create the grid.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

 * for()
 * image()

*/

var backgroundImg, itemImg;

function preload() {
    backgroundImg = loadImage("background.jpg");
    itemImg = loadImage("Dice.png");
}

function setup() {
    createCanvas(backgroundImg.width, backgroundImg.height);
    image(backgroundImg, 0, 0);

    imageMode(CENTER);
}

function draw() {
    // add your for loop below

      for(var i=0; i<8; i++){
  image(itemImg,552 + i*65, 319);

}
          for(var i=0; i<8; i++){
  image(itemImg,552 + i*65, 390);

}
          for(var i=0; i<8; i++){
  image(itemImg,552 + i*65, 461);

}
          for(var i=0; i<8; i++){
  image(itemImg,552 + i*65, 530);

}
          for(var i=0; i<8; i++){
  image(itemImg,552 + i*65, 603);

}
    
}
