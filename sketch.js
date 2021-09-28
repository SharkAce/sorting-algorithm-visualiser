let size = 15
function init(){
window.frame = 0
window.nums = randomArr(size)
window.frames = selectAlg([...nums])
window.reset = 0
window.run = 0
}
init()

function setup(){

  createCanvas(1400, 800)
  textAlign(CENTER)
}
function draw(){
  let speed = parseInt(document.getElementById("speed").value, 10)
  frameRate(speed || 40)
  background(53)
  strokeWeight(1.5)
  fill(250)
  textSize(40)
  text("Sorting algorithm visualiser",850,100)
  fill(70)
  rect(20,90,350,600,10)
  fill(200)

  if (reset){
    init()
  }

    let posX = 500
    for (data of frames[frame]){
      rect(posX,640,50,-data*2.5)
      textSize(20)
      text(data, posX+25, 680)
    posX += 60
    }
    frames.length > frame+1 && run ? frame++ : run = 0

}
