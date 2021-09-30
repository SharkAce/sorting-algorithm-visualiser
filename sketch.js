let size = 120;
let width = 8;
let FRAMES;
let frame = 0;
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
  init('shortInsertionSort');
}, 1);



function setup() {
  createCanvas(
    window.innerWidth,
    window.innerHeight
  );
  textAlign(CENTER)
}

function draw() {
  let speed = parseInt(document.getElementById("speed").value, 10)
  frameRate(speed || 40)
  background(53)
  strokeWeight(1)
  fill(250)
  textSize(40)
  text("Sorting algorithm visualizer", 850, 100)
  fill(70)
  rect(20, 90, 350, 600, 10)
  fill(200)

  let posX = 500
  for (let i = 0; i < FRAMES[frame].length; i++) {
    rect(posX, 640, width - 1, -FRAMES[frame][i] * 2.8)
    textSize(10)
    text(FRAMES[frame][i], posX + (width - 1) / 2, 680)
    posX += width;
  }
  FRAMES.length > frame + 1 && run ? frame++ : run = 0

}