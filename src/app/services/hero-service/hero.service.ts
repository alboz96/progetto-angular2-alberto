import { Injectable } from '@angular/core';
import { HEROES } from '../mock-heroes-data-service/mock-heroes-data.service';
import { Logger } from '../logger-service/logger.service';

@Injectable()
export class HeroService {

  constructor(
    private logger: Logger,
    private isAuthorized: boolean) { }

  getHeroes() {
    let auth = this.isAuthorized ? 'authorized ' : 'unauthorized';
    this.logger.log(`Getting heroes for ${auth} user.`);
    return HEROES.filter(hero => this.isAuthorized || !hero.isSecret);
  }
}
