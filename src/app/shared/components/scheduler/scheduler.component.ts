import { Component, OnInit } from '@angular/core';
// import { Observable, asyncScheduler } from 'rxjs';
// import { observeOn } from 'rxjs/operators';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  //   const observable = new Observable((observer) => {
  //     observer.next(1);
  //     observer.next(2);
  //     observer.next(3);
  //     observer.complete();
  //   }).pipe(
  //     observeOn(asyncScheduler)
  //   );

  //   console.log('just before subscribe');
  //   observable.subscribe({
  //     next(x) {
  //       console.log('got value ' + x);
  //     },
  //     error(err) {
  //       console.error('something wrong occurred: ' + err);
  //     },
  //     complete() {
  //        console.log('done');
  //     }
  //   });
  //   console.log('just after subscribe');
  }

}
