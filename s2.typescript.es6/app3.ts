 //VIDEO 18: PROMESAS
 //convenciones:resolve si resuelve, reject si lo rechaza
 let prom1= new Promise( function( resolve, reject ){
     setTimeout( ()=>{ 
         console.log("Promesa terminada");

         //Termina bien
         //resolve();

         //Termina mal.
         reject();

      },1500 )
 })

 console.log("paso1");
 prom1.then( function(){
     console.log("Ejecutarme cuando termine bien");
 }, 
     function(){
         console.error("Ejecutarme si todo sale mal");
     } 

     )
     console.log("paso2");    

     //Objetivo, demuestra como las promesas son procesos asincronos. Paso 1 y 2 se ejecutan antes que la promesa.
     //Por otro lado, demosotrar como en las promesas se ejecutan dos casos, si sale bien o si sale mal. 

     //VIDEO19. INTERFACES
     interface Xmen{
         nombre:string,
         poder:string    
     }

     let wolverine2:Xmen={
         nombre:"James Howlett",
         poder: "Resistencia telepatia"
     }

     function enviarCuartel(xmen : Xmen){
         console.log("Enviar al cuartel: " +xmen.nombre);
         //Imaginemos que no señala el tipo Xmen, podriamos poner xmen.otronombre,
         //y no señalaría el error.
     }

     enviarCuartel(wolverine2);

     /*VIDEO 21, 22 OBJETOS. Son abstracciones de cualquier cosa, en forma 
     de atributos y métodos, cualidades y funciones u acciones proprias de esa cosa. */

    class Avenger {
        nombre:string = "Antman";
        equipo: string;
        nombreReal: string;
        puedePelear:boolean;
        peleasGanadas:number;

        //definir constructor
       /* constructor(){
            console.log("Se ejecutó el constructor");
        }*/
        constructor(nombre:string, peleasGanadas:number){
            this.nombre = nombre;
            this.peleasGanadas= peleasGanadas;
        }
    }

    let antman:Avenger = new Avenger("NombreDesdeConstructor", 22);
    console.log(antman);

//VIDEO 24. Importando clases, modulos.
//En el video, imaginemos que el tiene 10 clases, importamos 10 lineas? es mejor
//crear un fichero index.ts, importar ahí, y luego importar desde index.
import { Persona } from './persona.class';

let persona1:Persona = new Persona("Juan", "Ortiz", 34);
console.log(persona1);