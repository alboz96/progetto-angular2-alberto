import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-child-view',
  template: '<input [(ngModel)]="hero">'
})
export class ChildViewComponent {
  hero = 'Magneta';
}
