let size = 120;

let FRAMES;
let frame = 0;
let frameRate = 60

let run = 0;
let reset = 0;
let nums = randomArr(size);

function init(key) {
  FRAMES = selectAlg(key, [...nums]);
}

// Initiate DOM checkboxes for Sorting Algs
setTimeout(() => {
  let keys = getKeys();
  for (let i = 0; i < keys.length; i++) {
    addDomFunc(keys[i]);
  }

  // Initiate simulation with a sorting alg
  init('insertionSort');
}, 1);


let wn = {
  x: window.innerWidth - 200,
  y: window.innerHeight
}
let width = 8;

function setup() {
  let canvas = createCanvas(
    wn.x,
    wn.y
  );

  canvas.parent('canvas');
  textAlign(CENTER);
  width = wn.x / size;
}

function draw() {


  background(53);
  noFill();
  strokeWeight(6);
  rect(0, 0, wn.x, wn.y);

  strokeWeight(2);
  fill(200);
  textSize(10);

  let posX = 0;
  for (let i = 0; i < FRAMES[frame].length; i++) {
    rect(posX, wn.y, width, -FRAMES[frame][i] * (wn.y / 100));
    // text(FRAMES[frame][i], posX + (width) / 2, 680);
    posX += width;
  }
  FRAMES.length > frame + 1 && run ? frame++ : run = 0

}
function keyPressed(){
  if (keyCode == ENTER){
    start()
  }
}
