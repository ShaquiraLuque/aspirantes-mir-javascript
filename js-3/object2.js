let persona={
    nombre: "Adrian",
    edad: 21,
    ciudad: "Magangue",
    Profesion: "Electricista"
}
console.log(persona)

function presentacion(persona){
    return("Hola, soy " + persona.nombre + ", tengo "+ persona.edad + " y soy de " + persona.ciudad)
}

let mensaje = presentacion(persona)

console.log(mensaje)

persona.hobbies = ["Bailar", "Dormir"]

console.log(persona.hobbies)

for (let i=0; i<persona.hobbies.length; i++){
    console.log(persona.hobbies[i])
}