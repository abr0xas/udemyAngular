import { Component, OnInit, Input } from '@angular/core';
import { Hereo } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html'
})
export class HeroeCardComponent implements OnInit {

  @Input() heroe:Hereo;
  @Input() indexHeroe:string;
  
  constructor(private router:Router) { }

  ngOnInit() {
  }

  verHeroe(){
    console.log("indexHeroe: " + this.indexHeroe);
    this.router.navigate(["/heroe",this.indexHeroe])

  }

}
