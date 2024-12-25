import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-guida-11-3',
  templateUrl: './ng-guida-11-3.component.html',
  styleUrls: ['./ng-guida-11-3.component.css']
})
export class NgGuida113Component implements OnInit {

  varPad: String = '';

  constructor() { }

  ngOnInit() {
    this.varPad = "Ciao";
    this.varPad = this.varPad.padEnd(15);
    this.varPad = this.varPad + "fineStringa";
  }

}
