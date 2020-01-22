import { Component, OnInit } from '@angular/core';
import { HeroesService, Hereo } from '../../services/heroes.service'; 
 
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  private heroes: Hereo[]=[];

  constructor( private _heroesService:HeroesService ) { }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

  

}
