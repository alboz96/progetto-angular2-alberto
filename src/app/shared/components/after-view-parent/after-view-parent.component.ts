import { Component, OnInit } from '@angular/core';
import { Logger2Service } from '../../../services/logger-service/logger2.service';

@Component({
  selector: 'after-view-parent',
  templateUrl: './after-view-parent.component.html',
  styleUrls: ['./after-view-parent.component.css'],
  providers: [Logger2Service]
})
export class AfterViewParentComponent {
  logs: string[];
  show = true;

  constructor(private logger: Logger2Service) {
    this.logs = logger.logs;
  }

  reset() {
    this.logs.length = 0;
    // quickly remove and reload AfterViewComponent which recreates it
    this.show = false;
    this.logger.tick_then(() => this.show = true);
  }
}
