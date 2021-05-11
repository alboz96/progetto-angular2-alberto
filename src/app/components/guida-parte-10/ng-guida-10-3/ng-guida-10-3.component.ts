import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-guida-10-3',
  templateUrl: './ng-guida-10-3.component.html',
  styleUrls: ['./ng-guida-10-3.component.css']
})
export class NgGuida103Component implements OnInit {

  myColor: String = "blu";
  myColor2: String = "rosso";
  myColor3: String = "giallo";

  myFont: String = "grassetto";
  myFont2: String = "italic";


  canSave = true;
  isUnchanged = true;
  isSpecial = true;

  currentClasses =  {
    blu: this.canSave,
    italic: !this.isUnchanged,
    grassetto:  this.isSpecial
  };

  currentStyles = {
    'font-style':  this.canSave      ? 'italic' : 'normal',
    'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
    'font-size':   this.isSpecial    ? '24px'   : '12px'
  };

  persona = {
    nome: '',
    cognome: '',
    indirizzo: ''
  };

  constructor() { }

  ngOnInit() {
  }

  isYellow() {
    return true;
  }

}
