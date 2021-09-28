function shortInsertionSort(array){
  let frames = []
  for (let i=1; i<array.length;i++){
    frames.push([...array])
    let current = array[i], j=i-1
    while(array[j]>current && j!=-1){
        array[j+1]=array[j]; j--
    }
    array[j+1]=current
  }
  frames.push([...array])
  return frames
}

function longInsertionSort(array){
  let frames = []
  for (let i=1; i<array.length;i++){
    let current = array[i], j=i-1
    while(array[j]>current && j!=-1){
        frames.push([...array])
        array[j+1]=array[j]; j--
    }
    array[j+1]=current
  }
  frames.push([...array])
  return frames
}
