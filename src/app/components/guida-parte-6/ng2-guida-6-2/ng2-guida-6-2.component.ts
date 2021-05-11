import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng2-guida-6-2',
  templateUrl: './ng2-guida-6-2.component.html',
  styleUrls: ['./ng2-guida-6-2.component.css']
})
export class Ng2Guida62Component implements OnInit {

    title = 'Tour of Heroes';
    heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    myHero = this.heroes[0];

    ngOnInit(): void {

    }
}
