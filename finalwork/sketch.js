// 最終課題を制作しよう
let x,y;
function setup(){
  createCanvas(600, 400);
    background(44, 66, 107);
 noStroke();
 x = 300;
 y = 200;

}

function draw(){

  fill(255,230,107);
   if (mouseIsPressed == true){
     star(mouseX,mouseY, 30, 30);
   }


  function star(cx, cy, r){

    beginShape();
    for(var i = 0; i < 5; i++){
      let theta = TWO_PI * i * 2 / 5 - HALF_PI;
      let x = cx + cos(theta) * r;
      let y = cy + sin(theta) * r;
      vertex(x,y);
    }
    endShape(CLOSE);
  }

  for(let i = 0; i <5; i++){
    fill(52, 168, 50);
    triangle(170, 60 + 50*i, 130 -20*i, 140 + 50*i, 210 + 20*i, 140 + 50*i);

    fill(130, 82, 55);
    rect(140, 340, 70, 50);}

     fill(255, 110, 94);
     ellipse(190,160,20);
      fill(255,230,107);
      ellipse(150,200,20);
      fill(  110, 202, 255);
      ellipse(190,240,20);
      fill(255, 110, 94);
      ellipse(130,290,20);
      fill(255,230,107);
      ellipse(210,320,20);

      textSize(42);
      textAlign(LEFT);
      fill(255, 110, 94);
      strokeWeight(3);
      textFont("Times New Roman");
text('Mery Christmas!!!', 250, 180);

   }
