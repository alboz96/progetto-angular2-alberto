import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero-list-impure',
  templateUrl: './hero-list.component.html'
})
export class HeroListImpureComponent implements OnInit { 
    jsonName: string;
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.jsonName = null;
    }
}
