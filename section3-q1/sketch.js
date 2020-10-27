// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46", 20, 30);
  fill(0);

  regularPolygon(3,133,37, 20);
}

function balloon(t, x, y){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 9; //余白の大きさ。ここまでの3行が吹き出しの大きさ
  fill(0);
  rect(0, 0, w + p * 2, h + p * 3);
  fill(255, 255, 0);
  text(t, p, h + p);
}
function regularPolygon(n, cx, cy, r){
  beginShape();
  for(var i = 0; i < n; i++){
    let theta = TWO_PI * i  / n - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);


}
