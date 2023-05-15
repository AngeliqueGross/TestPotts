//declare global variables 
let img;


//preload the picture of my cat
function preload() {
  img = loadImage("potts.png");
}

//I used the code from the example to resize the image of my cat
function setup() {
  createCanvas(img.width * 0.5, img.height * 0.5);
  
  //reset image orientation to center
  imageMode(CENTER);
  
  //display image at canvas center with canvas width and height
  image(img, width/2, height/2, width, height);
  
  //copy current canvas into img variable
  img = get();
}
//I want to pixelize the colors of the photo into circles  
function draw() {

  // load the pixels from the photo
  img.loadPixels();
  const pixelX = random(width);
  const pixelY = random(height);
  const pixelColor = img.get(pixelX, pixelY);

  // make a circle from the color 
  fill(pixelColor);
  ellipse(pixelX, pixelY, 20, 20);
  
  print("Creating an Image Effect, Angelique Gross, 05/14/23")
}