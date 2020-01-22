import { Component, OnInit } from '@angular/core';
import { HeroesService, Hereo } from '../../services/heroes.service'; 
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  private heroes: Hereo[]=[];

  constructor( private _heroesService:HeroesService,
               private router:Router ) { }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

  verHeroe(index:string){
    this.router.navigate(['/heroe',index])
  }

  

}
