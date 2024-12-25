import { Component, OnInit } from '@angular/core';
import { Logger2Service } from '../../../services/logger-service/logger2.service';

@Component({
  selector: 'counter-parent',
  templateUrl: './counter-parent.component.html',
  styles: ['.parent {background: gold;}'],
  providers: [Logger2Service]
})
export class CounterParentComponent {
  value: number;
  spyLog: string[] = [];

  private logger: Logger2Service;

  constructor(logger: Logger2Service) {
    this.logger = logger;
    this.spyLog = logger.logs;
    this.reset();
  }

  updateCounter() {
    this.value += 1;
    this.logger.tick();
  }

  reset() {
    this.logger.log('-- reset --');
    this.value = 0;
    this.logger.tick();
  }
}
