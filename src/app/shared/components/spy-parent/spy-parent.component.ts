import { Component, OnInit } from '@angular/core';
import { Logger2Service } from '../../../services/logger-service/logger2.service';

@Component({
  selector: 'spy-parent',
  templateUrl: './spy-parent.component.html',
  styleUrls: ['./spy-parent.component.css']
})
export class SpyParentComponent implements OnInit {

  newName = 'Herbie';
  heroes: string[] = ['Windstorm', 'Magneta'];
  spyLog: string[];

  constructor(private logger: Logger2Service) {
    this.spyLog = logger.logs;
  }

  ngOnInit(){

  }

  addHero() {
    if (this.newName.trim()) {
      this.heroes.push(this.newName.trim());
      this.newName = '';
      this.logger.tick();
    }
  }
  removeHero(hero: string) {
    this.heroes.splice(this.heroes.indexOf(hero), 1);
    this.logger.tick();
  }
  reset() {
    this.logger.log('-- reset --');
    this.heroes.length = 0;
    this.logger.tick();
  }
}
