import { Component } from '@angular/core';
@Component({
  selector: 'app-ng2-guida-6-1',
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero}}</h2>
    `
})
export class Ng2Guida61Component {
  // title = 'Tour of Heroes';
  // myHero = 'Windstorm';
  title: string;
  myHero: string;

  constructor() {
    this.title = 'Tour of Heroes';
    this.myHero = 'Windstorm';
  }
}
