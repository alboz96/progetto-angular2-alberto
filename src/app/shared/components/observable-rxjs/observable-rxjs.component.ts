import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'observable-rxjs',
  templateUrl: './observable-rxjs.component.html',
  styleUrls: ['./observable-rxjs.component.css']
})
export class ObservableRxjsComponent implements OnInit {
 // Observable base
  fooList: String[] = [];
  foo = new Observable(subscriber => {
    console.log('Hello');
    subscriber.next("42");
    subscriber.next("100");
    subscriber.next("200");
    setTimeout(() => {
      subscriber.next("300"); // avviene in modo asincrono (dopo 6 secondi)
    }, 6000);
  });

  // 1) Creazione Observable
  myObservable = new Observable(function subscribe(subscriber) {
    const id = setInterval(() => {
      subscriber.next('hi')
    }, 1000);
  });
////////////////////////////////////////////////////////////////////
  constructor() { }

  ngOnInit() {
    // Observable base
    console.log('before');
    this.fooList.push("prima (sincrono):");
    this.foo.subscribe(x => {
      console.log(x);
      this.fooList.push(String(x));
    });
    this.fooList.push("dopo 6 secondi (asincrono):");
    console.log('after');

    // 2) Subscribing to Observables
    this.myObservable.subscribe(x => console.log(x));
    ////////////////////////////////////////////////////////////////////

    // 3) Executing Observable
     this.myObservable = new Observable(function subscribe(subscriber) {
      try {
        subscriber.next(1);
        subscriber.next(2);
        subscriber.next(3);
        subscriber.complete();
      } catch (err) {
        subscriber.error(err); // delivers an error if it caught one
      }
    });
    const subscription = this.myObservable.subscribe(x => console.log(x));
    ////////////////////////////////////////////////////////////////////

    // 4) Disposing Observable Executions
    subscription.unsubscribe();
    ////////////////////////////////////////////////////////////////////
  }

// IMPORTANTE:
// ESEMPIO COMPLETO OBSERVABLE next-error-complete
// import { Observable } from 'rxjs';
 
// const observable = new Observable(function subscribe(subscriber) {
//   try {
//     subscriber.next(1);
//     subscriber.next(2);
//     subscriber.next(3);
//     subscriber.complete();
//   } catch (err) {
//     subscriber.error(err); // delivers an error if it caught one
//   }
// });
// const subscription = observable.subscribe(x => console.log(x));

}
