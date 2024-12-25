import { Component } from '@angular/core';

import { Logger2Service } from '../../../services/logger-service/logger2.service';

@Component({
  selector: 'peek-a-boo-parent',
  templateUrl: './peek-a-boo-parent.component.html',
  styleUrls: ['./peek-a-boo-parent.component.css'],
  providers:  [ Logger2Service ]
})
export class PeekABooParentComponent {

  hasChild = false;
  hookLog: string[];

  heroName = 'Windstorm';
  private logger: Logger2Service;

  constructor(logger: Logger2Service) {
    this.logger = logger;
    this.hookLog = logger.logs;
  }

  toggleChild() {
    this.hasChild = !this.hasChild;
    if (this.hasChild) {
      this.heroName = 'Windstorm';
      this.logger.clear(); // clear log on create
    }
    this.logger.tick();
  }

  updateHero() {
    this.heroName += '!';
    this.logger.tick();
  }
}
