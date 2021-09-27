let i=0
let speed = 15
let size = 15
let nums = randomArr(size)
let frames = longInsertionSort(nums)

function setup(){

  createCanvas(1400, 800)
  textSize(20)
}
function draw(){
    frameRate(speed)
  background(53)
  strokeWeight(1.5)
  fill(70)
  rect(20,70,350,600,10)
  fill(200)


    let posX = 500
    for (data of frames[i]){
      rect(posX,600,50,-data)
    posX += 60
    }
    if (frames.length > i+1){i++}
}
