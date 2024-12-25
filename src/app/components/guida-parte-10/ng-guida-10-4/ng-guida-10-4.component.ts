import { Component, OnInit } from '@angular/core';
import { HEROES } from '../../../../app/services/mock-heroes-data-service/mock-heroes-data.service';
import { Hero } from '../../../models/hero';

@Component({
  selector: 'app-ng-guida-10-4',
  templateUrl: './ng-guida-10-4.component.html',
  styleUrls: ['./ng-guida-10-4.component.css']
})
export class NgGuida104Component implements OnInit {

  persona = {
    nome: '',
    cognome: '',
    indirizzo: ''
  };

  isVisible = true;

  chosenColor = 'nero';

  heroes: Hero[] = [HEROES[0], HEROES[1], HEROES[2]];

  constructor() { }

  ngOnInit() {
  }

  trackByHeroes(index: number, hero: Hero): number { return hero.id; }

}
