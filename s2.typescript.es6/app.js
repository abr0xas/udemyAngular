function saludar(nombre) {
    console.log("Hola " + nombre);
}
var wolverine = {
    nombre: "Logan"
};
saludar(wolverine.nombre);
var nombre;
nombre = "123";
var numero = 123;
var booleano = true;
var hoy = new Date();
hoy = new Date('2020-10-21');
var cualquiera;
cualquiera = nombre;
cualquiera = numero;
cualquiera = booleano;
cualquiera = hoy;
//VIDEO 14TEMPLATE LITERALES DEL ES6
var nombre1 = 'juan';
var apellido1 = 'perez';
var edad1 = 29;
var texto = "Hola," + nombre1 + " " + apellido1 + "(" + edad1 + ")";
var texto2 = "Hola, " + nombre1 + " \n" + apellido1 + " " + edad1 + " ";
console.log(texto2);
// SE PUEDE AÑADIR CUALQUIER CÓDIGO JS AQUÍ. 
function getSuma(num1, num2) {
    return num1 + num2;
}
var codigoJs = "" + getSuma(1, 2);
//video 15 PARAMETROS OBLIGATORIOS Y OPCIONALES 
//Los valores obligatorios tienen que ir al principio. 
function activar(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "batiseñal"; }
    var mensaje;
    if (momento) {
        mensaje = quien + " activ\u00F3 la " + objeto + " en la " + momento;
    }
    else {
        mensaje = quien + " activ\u00F3 la " + objeto;
    }
    console.log(mensaje);
}
activar("Federico", "batiseñal", "tarde");
activar("Federico", "batiseñal");
//VIDEO 16. FUNCION DE FLECHA.
var miFuncionSinF = function (a) {
    return a;
};
var miFuncionFlecha = function (a) { return a; };
console.log(miFuncionSinF("sin flecha"));
console.log(miFuncionFlecha("Con flecha"));
//Con varios parámetros 
var miFuncionSinF2 = function (a, b) {
    return a + b;
};
var miFuncionFlecha2 = function (a, b) { return a + b; };
var miFuncionSinF3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var miFuncionFlecha3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
//UTILIDAD DE FUNCIÓN CON FLECHA
var hulk = {
    nombre: "Hulk",
    //se puede declarar así una función gracias a ecm6
    smash: function () {
        setTimeout(function () {
            //este this apunta a windows, el objeto global, no lee el nombre hulk.     
            console.log(this.nombre + " smash!!");
        }, 1500);
    }
};
hulk.smash();
//Solución con función de flecha, el cual utiliza el mismo this que el de la función. 
var hulk2 = {
    nombre: "Hulk",
    //se puede declarar así una función gracias a ecm6
    smash: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + " smash!!"); }, 1500);
    }
};
hulk2.smash();
//VIDEO 17 destructuración. 
var avenger = {
    nombre2: "Steve",
    clave: "capitan america",
    poder: "Droga"
};
//let { poder, clave, nombre2 } = avenger;
//se le puede dar un alias a las variables, escribiendo con dos dos puntos. 
var alias1 = avenger.clave, poder = avenger.poder, nombre2 = avenger.nombre2;
console.log(nombre2, alias1, poder);
//destructuración Arreglos
var avengers = ["Thor", "Steve", "Tony"];
var jefe = avengers[0], iroman = avengers[1], primo = avengers[2];
console.log(primo);
