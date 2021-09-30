class AlgData {
  constructor() {
    this.methods = {};
  }
}
AlgData.prototype.addFunction = (name, func) => {
  this.methods[name] = func;
}

let SORTING = new AlgData();

SORTING.addFunction('shortInsertionSort',
  (arr) => {
    let frames = []
    for (let i = 1; i < arr.length; i++) {
      frames.push([...arr])
      let current = arr[i],
        j = i - 1;
      while (arr[j] > current && j != -1) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = current
    }
    frames.push([...arr])
    return frames
  }
);

SORTING.addFunction('longInsertionSort',
  (arr) => {
    let frames = []
    for (let i = 1; i < arr.length; i++) {
      let current = arr[i],
        j = i - 1
      while (arr[j] > current && j != -1) {
        frames.push([...arr])
        arr[j + 1] = arr[j];
        j--
      }
      arr[j + 1] = current
    }
    frames.push([...arr])
    return frames
  }
);


//The two following functions were writen by Rjat M :
//https://medium.com/@rajat_m/implement-5-sorting-algorithms-using-javascript-63c5a917e811

SORTING.addFunction('bubbleSort',
  (arr) => {
    let frames = []
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        frames.push([...arr])
        if (arr[j + 1] < arr[j]) {
          // ES6 way of swapping arr elements
          [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        }
      }
    }
    return frames;
  }
)

SORTING.addFunction('selectionSort',
  (arr) => {
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
);