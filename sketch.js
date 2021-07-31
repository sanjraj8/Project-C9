var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);
btn_red = createButton("RED");
btn_red.position(100,50);


btn_green = createButton("GREEN");
btn_green.position(250,50);
btn_green.mousePressed(function green_bg()
{
  r = 0;
  g = 255;
  b = 0;

});
}


function draw() 
{
   background(30);

  if (keyIsDown(RIGHT_ARROW)) 
  {
    box.position.x = box.position.x +5;
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    box.position.x= box.position.x -5;
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    box.position.y = box.position.y - 5;
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    box.position.y = box.position.y + 5;
  }

  btn_red.mousePressed(function red_bg()
{
  r = 255;
  g = 0;
  b = 0;
});
  drawSprites();
}






