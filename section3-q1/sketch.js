
// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46");
}


function balloon(t, x, y){

  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 50;
  let a = 10;

  fill(52, 168, 50);
  rect(a, a, w + p * 2, h + p * 2);

  fill(255);
  textSize(18);
  text(t, p * 0.5 + a, h + p + a * 0.5);



  fill(52, 168, 50);
  triangle((w + p * 2) * 0.8, h + p * 2 + a,
   (w + p * 2) * 1, h + p * 2 + a,
   (w + p * 2) * 1.4, (h + p * 2 + a) * 1.3);

}
