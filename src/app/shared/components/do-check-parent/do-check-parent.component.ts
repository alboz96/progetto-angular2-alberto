import { Component, ViewChild } from "@angular/core";


import { DoCheckComponent } from "../do-check/do-check.component";

class Hero {
  constructor(public name: string) {}
}

@Component({
  selector: 'do-check-parent',
  templateUrl: './do-check-parent.component.html',
  styles: ['.parent {background: Lavender}']
})
export class DoCheckParentComponent {
  hero: Hero;
  power: string;
  title = 'DoCheck';
  @ViewChild(DoCheckComponent) childView: DoCheckComponent;

  constructor() { this.reset(); }

  reset() {
    this.hero = new Hero('Windstorm');
    this.power = 'sing';
    if (this.childView) { this.childView.reset(); }
  }
}