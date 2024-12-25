import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ng-guida-10-2',
  templateUrl: './ng-guida-10-2.component.html',
  styleUrls: ['./ng-guida-10-2.component.css']
})
export class NgGuida102Component implements OnInit {
  @Output('myClick') clicks = new EventEmitter<String>(); //  @Output(alias) propertyName = ...
  fontSizePx: number = 16;
  clickMessage: String = '';
  constructor() { }

  ngOnInit() {
  }

}
