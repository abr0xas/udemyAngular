 
function myParams(p1:string, p2:number, p3:boolean,   p4?:string ){

                        let message:string;

                        if(p4){
                            message=`P1 -> ${p1},
                                     p2 -> ${p2},
                                     p3 -> ${p4}`;
                        }else{
                            message=`no hay param3`;
                        }
                         
                        console.log(message);
                    }

                    myParams("hello", 12, false, 'goodbye'); 

//FUNCIÓN CON SIN FLECHA Y CON FLECHA
// RETURN 1 PARAMETRO
let myfunc= function(a){

    return a;
}

let nombre:string= 'Fuera de objeto';

let objetoSinF = {
    nombre : 'Roberto',

    myFuncObje(){
        setTimeout( 
            function(){
                console.log(`Imprimiendo ${this.nombre}`);
            }, 1500
        );
    }
}

objetoSinF.myFuncObje();

let objetoConF = {
    nombre:"Roberto dentro",

    myFuncObj(){
        setTimeout ( ()=>{console.log(`Imprimiendo... ${this.nombre}`)}, 2000); 
    }
}

objetoConF.myFuncObj();