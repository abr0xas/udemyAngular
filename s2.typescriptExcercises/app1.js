function myParams(p1, p2, p3, p4) {
    var message;
    if (p4) {
        message = "P1 -> " + p1 + ",\n                                     p2 -> " + p2 + ",\n                                     p3 -> " + p4;
    }
    else {
        message = "no hay param3";
    }
    console.log(message);
}
myParams("hello", 12, false, 'goodbye');
//FUNCIÓN CON SIN FLECHA Y CON FLECHA
// RETURN 1 PARAMETRO
var myfunc = function (a) {
    return a;
};
var nombre = 'Fuera de objeto';
var objetoSinF = {
    nombre: 'Roberto',
    myFuncObje: function () {
        setTimeout(function () {
            console.log("Imprimiendo " + this.nombre);
        }, 1500);
    }
};
objetoSinF.myFuncObje();
var objetoConF = {
    nombre: "Roberto dentro",
    myFuncObj: function () {
        var _this = this;
        setTimeout(function () { console.log("Imprimiendo... " + _this.nombre); }, 2000);
    }
};
objetoConF.myFuncObj();
