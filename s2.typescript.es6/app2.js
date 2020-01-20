"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log("hola soy el segundo archivo");
function enviarMision(xmen) {
    console.log("Enviando a : " + xmen.nombre);
}
function enviarCuartel(xmen) {
    console.log("Enviando al cuartel : " + xmen.nombre);
}
var wolverine = {
    nombre: "wolverine",
    poder: "Regeneración"
};
enviarMision(wolverine);
enviarCuartel(wolverine);
//VIDEO 25 DECORADORES @---
function consola(constructor) {
    console.log(constructor);
}
var Villano = /** @class */ (function () {
    function Villano(nombre) {
        this.nombre = nombre;
    }
    Villano = __decorate([
        consola
    ], Villano);
    return Villano;
}());
