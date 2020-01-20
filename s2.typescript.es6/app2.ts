console.log("hola soy el segundo archivo");

//video 19 Interfaces

interface Xmen{
    nombre:string,
    poder:string
}

function enviarMision(xmen:Xmen){
    console.log("Enviando a : " + xmen.nombre);
}

function enviarCuartel(xmen:Xmen){
    console.log("Enviando al cuartel : " + xmen.nombre);
}

let wolverine : Xmen = {
    nombre : "wolverine",
    poder: "Regeneración"
};

enviarMision(wolverine);
enviarCuartel(wolverine);

//VIDEO 25 DECORADORES @---
function consola( constructor: Function){
    console.log(constructor);
}

@consola
class Villano{
    constructor(public nombre:string){

    }
}