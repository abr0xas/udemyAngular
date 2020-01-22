import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Hereo, HeroesService } from 'src/app/services/heroes.service';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html' 
})
export class HeroeComponent implements OnInit {

  private heroe:Hereo;

  constructor(private activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService) { 
    activatedRoute.params.subscribe( 
      params =>  this.heroe = this._heroesService.getHeroe(params['id'])
      
      )}

  ngOnInit() {
  }

}
