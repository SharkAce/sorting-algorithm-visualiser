function insertionSort(array){
    for (let i=1; i<array.length;i++){
        let current = array[i], j=i-1
        while(array[j]>current && j!=-1){
            console.log(array)
            array[j+1]=array[j]; j--
        }
        array[j+1]=current
    }
    return array
}
