import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent{

    mostrar = true;
    personajes:any = ['Spiderman', 'Batman', ' Tormenta'];
    frase:any = {
        author:  "Ben Parker",
        message: "Un gran poder requiere de una gran responsabilidad"
    }
    
}