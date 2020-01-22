import { Component, OnInit } from '@angular/core';
import { HeroesService, Hereo } from 'src/app/services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-encontrados',
  templateUrl: './encontrados.component.html' 
})
export class EncontradosComponent implements OnInit {

  private heroes:Hereo[]=[];
  private terminoBusqueda:string;

  constructor(private _heroesService:HeroesService, 
              private activatedRoute:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(
      params=>{
        this.terminoBusqueda=params.buscarNombre;
        console.log(`termino a buscar: ${this.terminoBusqueda} . final`);
        this.heroes = this._heroesService.buscarHeroes(params.buscarNombre); 
        console.log(this.heroes);

      });
  
  }

  verHeroe(index:string){
    this._heroesService.verHeroe(index);
  }


}
