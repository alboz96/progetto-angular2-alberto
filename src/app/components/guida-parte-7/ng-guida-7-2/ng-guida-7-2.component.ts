import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-guida-7-2',
  templateUrl: './ng-guida-7-2.component.html',
  styleUrls: ['./ng-guida-7-2.component.css']
})
export class NgGuida72Component implements OnInit {
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
