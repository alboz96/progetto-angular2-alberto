import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.css']
})
//ALTERNATIVA ALLE ANNOTATIONS PER @Input e @Output
// @Component({
//   inputs: ['size'],
//   outputs: ['sizeChange'],
// })
export class SizerComponent implements OnInit {
  @Input()  size: number | string;
  @Output() sizeChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  dec() { this.resize(-1); }
  inc() { this.resize(+1); }
  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }
}
