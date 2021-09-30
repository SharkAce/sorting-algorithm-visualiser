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


//The two following functions were writen by Rjat M :
//https://medium.com/@rajat_m/implement-5-sorting-algorithms-using-javascript-63c5a917e811

function bubbleSort(arr) {
    let frames = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            frames.push([...arr])
            if (arr[j + 1] < arr[j]) {
                // ES6 way of swapping array elements
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
            }
        }
    }
    return frames;
}

function selectionSort(arr) {
    let min, frames = []
    for (let i = 0; i < arr.length; i++) {
        frames.push([...arr])
        // Assume a minimum value
        min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        // Swap if new minimun value found
        if (min !== i) {
          [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    return frames;
}
