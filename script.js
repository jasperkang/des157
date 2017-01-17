
function setup(){
  var myCanvas=createCanvas(800, 250);
  myCanvas.parent('mySketch');
  background (85,140,137);
    }
  
  function draw(){
  
  if(mouseIsPressed){
    line(pmouseX,pmouseY,mouseX,mouseY)
    }
  
  if (mouseButton == RIGHT){
     background(85,140,137);
  }
  }







