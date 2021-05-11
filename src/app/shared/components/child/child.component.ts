import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-child',
  template: '<input [(ngModel)]="hero">'
})
export class ChildComponent {
  hero = 'Magneta';
}

