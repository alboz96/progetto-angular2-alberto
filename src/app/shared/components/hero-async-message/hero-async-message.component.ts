import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Component({
  selector: 'hero-message',
  templateUrl: './hero-async-message.component.html'
})
export class HeroAsyncMessageComponent {
  message$: Observable<string>;

  private messages = [
    'You are my hero!',
    'You are the best hero!',
    'Will you be my hero?'
  ];

  constructor() { this.resend(); }

  resend() {
    this.message$ = Observable.interval(2000)
      .map(i => this.messages[i])
      .take(this.messages.length);
  }
}

// Alternative message$ formula:
// this.message$ = Observable.fromArray(this.messages)
//   .map(message => Observable.timer(2000).map(() => message))
//   .concatAll();
