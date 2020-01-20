
// Uso de Let y Const
const NOMBRE = "Ricardo Tapia";
let edad = 23;

var PERSONAJE = {
  nombre:NOMBRE,
  edad: edad
};


// Cree una interfaz que sirva para validar el siguiente objeto
var batman :Batman= {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}

interface Batman {
  nombre:string;
  artesMarciales: string[];
}

// Convertir esta funcion a una funcion de flecha
/*function resultadoDoble( a, b ){
  return (a + b) * 2
}*/
let resultadoDoble = (a:number,b:number) => (a+b)*2;

// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger( nombre:string,  poder?:string, arma="arco" ){
  var mensaje;
  if( poder ){
     mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
  }else{
     mensaje = nombre + " tiene un " + poder
  }
};

// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.

class Rectangulo{
  base:number;
  altura:number;   

  calculaArea():number {
 
   return  this.base*this.altura; 
   }
}
