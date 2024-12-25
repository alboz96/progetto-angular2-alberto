/* tslint:disable:forin */
import {
  Component, Input, OnChanges,
  SimpleChanges, ViewChild
} from '@angular/core';
import { OnChangesComponent } from '../on-changes/on-changes.component';

class Hero {
  constructor(public name: string) {}
}

@Component({
  selector: 'on-changes-parent',
  templateUrl: './on-changes-parent.component.html',
  styles: ['.parent {background: Lavender;}']
})
export class OnChangesParentComponent {
  hero: Hero;
  power: string;
  title = 'OnChanges';
  @ViewChild(OnChangesComponent) childView: OnChangesComponent;

  constructor() {
    this.reset();
  }

  reset() {
    // new Hero object every time; triggers onChanges
    this.hero = new Hero('Windstorm');
    // setting power only triggers onChanges if this value is different
    this.power = 'sing';
    //IMPPRTANTE: reset del componente figlio iniettato con ViewChild
    if (this.childView) { this.childView.reset(); }
  }
}
