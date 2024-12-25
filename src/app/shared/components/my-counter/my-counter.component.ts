import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent implements OnChanges {
  @Input() counter: number;
  changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges) {

    // Empty the changeLog whenever counter goes to zero
    // hint: this is a way to respond programmatically to external value changes.
    if (this.counter === 0) {
      this.changeLog.length = 0;
    }

    // A change to `counter` is the only change we care about
    let chng = changes['counter'];
    let cur = chng.currentValue;
    let prev = JSON.stringify(chng.previousValue); // first time is {}; after is integer
    this.changeLog.push(`counter: currentValue = ${cur}, previousValue = ${prev}`);
  }
}