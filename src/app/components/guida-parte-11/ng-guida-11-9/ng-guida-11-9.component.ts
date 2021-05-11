import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-guida-11-9',
  templateUrl: './ng-guida-11-9.component.html',
  styleUrls: ['./ng-guida-11-9.component.css']
})
export class NgGuida119Component implements OnInit {

  birthday = new Date(1988, 3, 15); // April 15, 1988
  toggle: boolean;

  get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }

  constructor() { }

  ngOnInit() {
  }

}
