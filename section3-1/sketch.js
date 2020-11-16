// テキスト「関数を使う」
// 練習問題：このプログラムを改造してEUの旗を描いてみよう
function setup(){
  createCanvas(250, 200);
  background(0,51,161);
   noStroke();
  for(let i = 0; i < 12; i++){
    let theta = TWO_PI * i / 12;
    let x = 120 + cos(theta) * 50;
    let y = 100 + sin(theta) * 50;
    fill(255, 255, 0)
    star(x, y, 10);
}
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
