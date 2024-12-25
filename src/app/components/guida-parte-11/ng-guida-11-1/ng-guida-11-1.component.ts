import { Component,  OnInit} from '@angular/core';
// import { trigger, state, style, transition, animate} from '@angular/animations/animations.js';
import { trigger, transition, animate, style } from '@angular/animations';
import { HEROES } from '../../../../app/services/mock-heroes-data-service/mock-heroes-data.service';
import { Hero } from '../../../models/hero';

@Component({
  selector: 'app-ng-guida-11-1',
  templateUrl: './ng-guida-11-1.component.html',
  styleUrls: ['./ng-guida-11-1.component.css']
})
export class NgGuida111Component implements OnInit {


  // animations: [
  //   trigger('heroState', [
  //     state('inactive', style({
  //       backgroundColor: '#eee',
  //       transform: 'scale(1)'
  //     })),
  //     state('active',   style({
  //       backgroundColor: '#cfd8dc',
  //       transform: 'scale(1.1)'
  //     })),
  //     transition('inactive => active', animate('100ms ease-in')),
  //     transition('active => inactive', animate('100ms ease-out'))
  //   ])
  // ]

  heroes: Hero[] = HEROES;

  constructor() { }

  ngOnInit() {
  }

}
