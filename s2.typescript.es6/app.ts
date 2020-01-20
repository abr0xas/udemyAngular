function saludar(nombre : string) {
    
    console.log("Hola " + nombre);

}

var wolverine = {
    nombre: "Logan"
};

saludar(wolverine.nombre);

let nombre: string;
nombre= "123";

let numero:number =123;

let booleano: boolean =true;

let hoy : Date = new Date();

hoy = new Date('2020-10-21');

let cualquiera : any;

cualquiera = nombre;
cualquiera = numero;
cualquiera = booleano;
cualquiera = hoy; 

//VIDEO 14TEMPLATE LITERALES DEL ES6

let nombre1 : string = 'juan';
let apellido1 : string = 'perez';
let edad1 : number = 29;
let texto = "Hola," + nombre1 + " " + apellido1 + "(" + edad1 + ")";
let texto2
= `Hola, ${ nombre1 } 
${apellido1} ${edad1} `;
console.log(texto2);

// SE PUEDE AÑADIR CUALQUIER CÓDIGO JS AQUÍ. 

  function getSuma(  num1,   num2){
    return num1 + num2;
}
let codigoJs = `${ getSuma(1, 2) }`;

//video 15 PARAMETROS OBLIGATORIOS Y OPCIONALES 
//Los valores obligatorios tienen que ir al principio. 
function activar (quien : string,
                  objeto:string="batiseñal",
                  momento?:string ){
    let mensaje:string;
 
    if(momento){
        mensaje=`${quien} activó la ${objeto} en la ${ momento }`;
    }else{
        mensaje= `${quien} activó la ${objeto}`;
    }

    console.log(mensaje);
}

activar("Federico", "batiseñal", "tarde");
activar("Federico", "batiseñal");
//VIDEO 16. FUNCION DE FLECHA.
let miFuncionSinF = function(a){
    return a;
}

let miFuncionFlecha = (a) => a;

console.log(miFuncionSinF("sin flecha"));
console.log(miFuncionFlecha("Con flecha"));

//Con varios parámetros 
let miFuncionSinF2 = function(a:number, b:number){
    return a + b;
}
let miFuncionFlecha2= (a:number, b:number) => a + b;

let miFuncionSinF3 = function(nombre: string){
    nombre = nombre.toUpperCase();
    return nombre;
}

let miFuncionFlecha3 = ( nombre :string ) => {
    nombre = nombre.toUpperCase();
    return nombre;
}

//UTILIDAD DE FUNCIÓN CON FLECHA
let hulk = {
    nombre: "Hulk",
    //se puede declarar así una función gracias a ecm6
    smash(){
        setTimeout(function() { 
        //este this apunta a windows, el objeto global, no lee el nombre hulk.     
        console.log(this.nombre + " smash!!");
        }, 1500)
    }
}

hulk.smash();

    //Solución con función de flecha, el cual utiliza el mismo this que el de la función. 
    let hulk2 = {
        nombre: "Hulk",
        //se puede declarar así una función gracias a ecm6
        smash(){
            setTimeout( ()=> console.log(this.nombre + " smash!!"), 1500);
        }
    }
hulk2.smash();


//VIDEO 17 destructuración. 
let avenger = {
    nombre2: "Steve",
    clave: "capitan america",
    poder: "Droga"
}

//let { poder, clave, nombre2 } = avenger;
//se le puede dar un alias a las variables, escribiendo con dos dos puntos. 
let { clave: alias1, poder, nombre2} = avenger;
console.log(nombre2, alias1, poder);

//destructuración Arreglos
let avengers:string[] = ["Thor", "Steve", "Tony"];

let [ jefe, iroman, primo] = avengers;

console.log(primo);

 