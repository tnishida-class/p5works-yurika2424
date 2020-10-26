// ギリシャ国旗
function setup() {
  const blue = color(0, 51, 160);
  createCanvas(270, 180);
 noStroke();
  background(255);

  let d = height / 9; // 縞1本の太さ

  for(let i = 0; i < 9; i++){
    // BLANK[1] (hint: 縞の色を交互に変えるには2で割った余りを使おう)
    if  (i % 2 == 0) {
      fill(blue);
        rect(0, i * d, width, d);
    }
    else{
      fill(255);
          rect(0, i * d, width, d);
    }

  }

  fill(blue);
  let size = d * 5;
  rect(0, 0, size, size);

  fill(255);
  rect(0,2 * d, 5 * d, d);
  rect(2 * d, 0, d, 5 * d);
  // BLANK[2] (hint: 白い十字を描くには rect を二つ描こう)
}
