function randomArr(size){
  let array = []
  for (let i=0; i<size; i++){
    array.push(Math.floor(Math.random()*100))
  }
  return array
}
