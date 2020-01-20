"use strict";
exports.__esModule = true;
//VIDEO 18: PROMESAS
//convenciones:resolve si resuelve, reject si lo rechaza
var prom1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promesa terminada");
        //Termina bien
        //resolve();
        //Termina mal.
        reject();
    }, 1500);
});
console.log("paso1");
prom1.then(function () {
    console.log("Ejecutarme cuando termine bien");
}, function () {
    console.error("Ejecutarme si todo sale mal");
});
console.log("paso2");
var wolverine2 = {
    nombre: "James Howlett",
    poder: "Resistencia telepatia"
};
function enviarCuartel(xmen) {
    console.log("Enviar al cuartel: " + xmen.nombre);
    //Imaginemos que no señala el tipo Xmen, podriamos poner xmen.otronombre,
    //y no señalaría el error.
}
enviarCuartel(wolverine2);
/*VIDEO 21, 22 OBJETOS. Son abstracciones de cualquier cosa, en forma
de atributos y métodos, cualidades y funciones u acciones proprias de esa cosa. */
var Avenger = /** @class */ (function () {
    //definir constructor
    /* constructor(){
         console.log("Se ejecutó el constructor");
     }*/
    function Avenger(nombre, peleasGanadas) {
        this.nombre = "Antman";
        this.nombre = nombre;
        this.peleasGanadas = peleasGanadas;
    }
    return Avenger;
}());
var antman = new Avenger("NombreDesdeConstructor", 22);
console.log(antman);
//VIDEO 24. Importando clases, modulos.
//En el video, imaginemos que el tiene 10 clases, importamos 10 lineas? es mejor
//crear un fichero index.ts, importar ahí, y luego importar desde index.
var persona_class_1 = require("./persona.class");
var persona1 = new persona_class_1.Persona("Juan", "Ortiz", 34);
console.log(persona1);
