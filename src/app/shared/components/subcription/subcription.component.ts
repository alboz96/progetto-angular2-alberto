import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs/observable/interval';

@Component({
  selector: 'app-subcription',
  templateUrl: './subcription.component.html',
  styleUrls: ['./subcription.component.css']
})
export class SubcriptionComponent implements OnInit {

  arrToPrint: String [] = [];

  constructor() { }

  ngOnInit() {
    const observable1 = interval(1000); // run every 1000 milliseconds
    const observable2 = interval(600); // run every 600 milliseconds

    const subscription = observable1.subscribe(x => this.arrToPrint.push('first: ' + x));
    const childSubscription = observable2.subscribe(x => this.arrToPrint.push('second: ' + x));

    subscription.add(childSubscription);

    setTimeout(() => {
      // Unsubscribes BOTH subscription and childSubscription after 3200 milliseconds
      subscription.unsubscribe();
    }, 3200);
  }

}
