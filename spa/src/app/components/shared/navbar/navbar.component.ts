import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  constructor(private router:Router) { }

   
  buscarHeroes(termino:string){
    console.log(`dentro navbar buscarHeroes: ${termino}`)
     this.router.navigate(['/encontrados', termino]);
  }
}
