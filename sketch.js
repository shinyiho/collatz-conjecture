let arr = [];
let ul = 1;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(51);

  for (let i = 1; i <= 500000; i++) {
    let p = i;
    do {
      arr.push(p);
      p = collatz(p);
    } while (p !== 1);
    arr.push(1);
  }
}

function draw() {
  let len = 12;
  let angle = PI / 16;
  for (let j = ul - 300; j <= ul; j++) {
    if (arr[j] === 1) {
      resetMatrix();
      translate(width / 2, height / 2);
    }
    if (arr[j] % 2 === 0) {
      rotate(angle);
    } else {
      rotate(-angle);
    }
    strokeWeight(4);
    stroke("rgba(255,204,0,0.1)");

    line(0, 0, 0, -len);
    text(arr[j], 0, 0);
    translate(0, -len);
  }
  ul = ul + 300;
}

function collatz(n) {
  if (n % 2 === 0) {
    return n / 2;
  } else {
    return (3 * n + 1) / 2;
  }
}
