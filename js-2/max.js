function max(arreglo){
    let numMax = arreglo[0]
    for (let i=0; i<arreglo.length; i++){
        if (arreglo[i]>numMax){
            numMax=arreglo[i]
        }
    }
    return (numMax)

}






console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined