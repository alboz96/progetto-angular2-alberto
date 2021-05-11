import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { from } from 'rxjs/observable/from';
import { multicast } from 'rxjs/operator/multicast';
import { Observable, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';


@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  subjectExample1Array: String[] = [];
  subjectExample2Array: String[] = [];
  subjectExample3Array: String[] = [];
  subjectExample4Array: String[] = [];
  subjectExample5Array: String[] = [];
  subjectExample6Array: String[] = [];

  constructor() { }

  ngOnInit() {
    //ESEMPIO 1: Associare 2 listeners ad un Subject (tipo particolare di Observable)
    //Observable
    const subject1 = new Subject<number>();

    //sottoscrivo l'Observer (osservatore) 1
    subject1.subscribe({
      next: (v) => {
        console.log(`observerA: ${v}`)
        this.subjectExample1Array.push(`observerA: ${v} | `);
      }
    });

    //sottoscrivo il secondo Observer (osservatore) 2
    subject1.subscribe({
      next: (v) => {
        console.log(`observerB: ${v}`)
        this.subjectExample1Array.push(`observerB: ${v} | `);
      }
    });

    //subject si usa quando gli Observer vengono definiti prima che venga usato il next()
    //o alcuni observer sottoscritti in seguito ai next() perdono le informazioni emesse precedentemente
    subject1.next(1);
    subject1.next(2);

    // Logs:
    // observerA: 1
    // observerB: 1
    // observerA: 2
    // observerB: 2
///////////////////////////////////////////////////////////////////////////////////////////

    //ESEMPIO 2: Associare 3 listeners ad un Subject usando from
    const subject2 = new Subject<number>();

    subject2.subscribe({
      next: (v) => {
        console.log(`observerA: ${v}`)
        this.subjectExample2Array.push(`observerA: ${v} | `);
      }
    });

    subject2.subscribe({
      next: (v) => {
        console.log(`observerB: ${v}`)
        this.subjectExample2Array.push(`observerB: ${v} | `);
      }
    });

    //assegno un array di observable castando i dati con con from
    const observable = from([1, 2, 3]);

    observable.subscribe(subject2); // You can subscribe providing a Subject

    // Logs:
    // observerA: 1
    // observerB: 1
    // observerA: 2
    // observerB: 2
    // observerA: 3
    // observerB: 3
    //////////////////////////////////////////////////////////////////////////////

    //ESEMPIO 3: Multicast
    // const source = from([1, 2, 3]);
    // const subject3 = new Subject();
    // const multicasted = source.pipe(multicast(subject3));

    // // These are, under the hood, `subject.subscribe({...})`:
    // multicasted.subscribe({
    //   next: (v) => console.log(`observerA: ${v}`)
    // });
    // multicasted.subscribe({
    //   next: (v) => console.log(`observerB: ${v}`)
    // });

    // // This is, under the hood, `source.subscribe(subject)`:
    // multicasted.connect();
    ////////////////////////////////////////////////////////////////////////////////

    //ESEMPIO 4: Behavior Subject

    const subject4 = new BehaviorSubject(0); // 0 is the initial value

    subject4.subscribe({
      next: (v) => {
        console.log(`observerA: ${v}`);
        this.subjectExample4Array.push(`observerA: ${v} | `);
      }
    });

    subject4.next(1);
    subject4.next(2);

    subject4.subscribe({
      next: (v) => {
        console.log(`observerB: ${v}`);
        this.subjectExample4Array.push(`observerB: ${v} | `);
      }
    });

    subject4.next(3);

    // Logs
    // observerA: 0
    // observerA: 1
    // observerA: 2
    // observerB: 2 // ultimo valore registrato viene emesso nuovamente quando si aggiunge un observer in un secondo momento (per aggiornarlo sulla situazione attuale)
    // observerA: 3
    // observerB: 3
    //////////////////////////////////////////////////////////////////////////////////

    //ESEMPIO 5: ReplaySubject
    //registra 3 valori da riutilizzare per il nuovo subscriber
    const subject5 = new ReplaySubject(3); // buffer 3 values for new subscribers

    subject5.subscribe({
      next: (v) => {
        console.log(`observerA: ${v}`);
        this.subjectExample5Array.push(`observerA: ${v} | `);
      }
    });

    subject5.next(1);
    subject5.next(2);
    subject5.next(3);
    subject5.next(4);

    subject5.subscribe({
      next: (v) => {
      console.log(`observerB: ${v}`);
      this.subjectExample5Array.push(`observerB: ${v} | `);
      }
    });

    subject5.next(5);

    // Logs:
    // observerA: 1
    // observerA: 2
    // observerA: 3
    // observerA: 4
    // observerB: 2
    // observerB: 3
    // observerB: 4
    // observerA: 5
    // observerB: 5

    //ESEMPIO 6: AsyncSubject
    const subject6 = new AsyncSubject();

    subject6.subscribe({
      next: (v) => {
        console.log(`observerA: ${v}`);
        this.subjectExample6Array.push(`observerA: ${v} | `);
      }
    });

    subject6.next(1);
    subject6.next(2);
    subject6.next(3);
    subject6.next(4);

    subject6.subscribe({
      next: (v) => {
        console.log(`observerB: ${v}`);
        this.subjectExample6Array.push(`observerB: ${v} | `);
      }
    });

    subject6.next(5);
    subject6.complete();

    // Logs:
    // observerA: 5
    // observerB: 5
  }

}
