function maxIndex(arreglo){
    let index = 0
    if (arreglo.length===0){
        index = -1
    }
    else{
        let numMax = arreglo[0]
        for (let i=0; i<arreglo.length; i++){
            if (arreglo[i]>numMax){
                numMax=arreglo[i]
                index=i
            }
        }
    }
    
    return (index)

}
console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1