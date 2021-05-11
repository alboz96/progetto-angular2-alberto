import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-guida-7-1',
  templateUrl: './ng-guida-7-1.component.html',
  styleUrls: ['./ng-guida-7-1.component.css']
})
export class NgGuida71Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clickMessage = '';
  onKeyValues = '';
  onKeyValues2 ='';  
  onKeyValues3 ='';
  onEnterValues = '';
  onBlurOrEnterValues = '';

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }

  onKey(event: any) { // without type info
    this.onKeyValues += event.target.value + ' | ';
  }  

  onKey2(event: KeyboardEvent) { // with type info
    this.onKeyValues2 += (<HTMLInputElement>event.target).value + ' | ';
  }

  onKey3(value: string) {
    this.onKeyValues3 += value + ' | ';
  }

  onEnter(value: string) { 
    this.onEnterValues = value;
   }

   update(value:string){
     this.onBlurOrEnterValues = value;
   }
}
