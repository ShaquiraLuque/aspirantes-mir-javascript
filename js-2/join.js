function join(arreglo){
    let text = ""
    for (let i=0; i<arreglo.length; i++){
        text+= (arreglo[i] + " ")
    }
    return text
}
console.log(join(["H","O","L","A"]))