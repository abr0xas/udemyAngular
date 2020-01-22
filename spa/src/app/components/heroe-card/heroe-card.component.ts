import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Hereo } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html'
})
export class HeroeCardComponent implements OnInit {

  @Input() heroe:Hereo;
  @Input() indexHeroe:string;
  @Output() heroeEncontrado: EventEmitter<string>;
  constructor(private router:Router) {
    this.heroeEncontrado=new EventEmitter();
   }

  ngOnInit() {
  }

  verHeroe(){
    console.log(`IndexHeroe from card: ${this.indexHeroe}`);
    this.heroeEncontrado.emit(this.indexHeroe);
  }

}
