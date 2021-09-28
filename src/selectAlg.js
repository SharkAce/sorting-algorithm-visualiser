function selectAlg (input){
  if (document.getElementById('lis').checked){
    return longInsertionSort(input)

  } else if (document.getElementById('sis').checked){
    return shortInsertionSort(input)

  } else if (document.getElementById('bs').checked){
  return bubbleSort(input)

  } else if (document.getElementById('ss').checked){
  return selectionSort(input)
  }
}
