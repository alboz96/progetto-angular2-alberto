import { Component, OnInit } from '@angular/core';
import { Hero2 } from '../../../models/hero2';

@Component({
  selector: 'app-ng-guida-8-1',
  templateUrl: './ng-guida-8-1.component.html',
  styleUrls: ['./ng-guida-8-1.component.css']
})
export class NgGuida81Component implements OnInit {
  ngOnInit(): void {
  }
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  model = new Hero2(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;
  onSubmit() { this.submitted = true; }
  newHero() {
    this.model = new Hero2(42, '', '');
  }

  //CREA IL GETTER DI UNA PROPERTY diagnostic CHE RESTITUISCE IL JSON DI this.model
  get diagnostic() { return JSON.stringify(this.model); }
    
  }
