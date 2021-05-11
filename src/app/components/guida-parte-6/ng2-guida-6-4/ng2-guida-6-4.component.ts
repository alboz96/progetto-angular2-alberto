import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../models/hero';

@Component({
  selector: 'app-ng2-guida-6-4',
  templateUrl: './ng2-guida-6-4.component.html',
  styleUrls: ['./ng2-guida-6-4.component.css']
})
export class Ng2Guida64Component implements OnInit {

  title = 'Tour of Heroes';
  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
  ];
  myHero = this.heroes[0];

  constructor() { }

  ngOnInit() {
  }

}
