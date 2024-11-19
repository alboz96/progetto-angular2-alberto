import { Injectable, Inject } from "@angular/core";
import { HEROES } from "../mock-heroes-data-service/mock-heroes-data.service";
import { Logger } from "../logger-service/logger.service";
import { IS_AUTHORIZED } from "../hero.service.provider";

@Injectable()
export class HeroService {
  constructor(
    private logger: Logger,
    @Inject(IS_AUTHORIZED) private isAuthorized: boolean
  ) {}

  getHeroes() {
    const auth = this.isAuthorized ? "authorized" : "unauthorized";
    this.logger.log(`Getting heroes for ${auth} user.`);
    return HEROES.filter((hero) => this.isAuthorized || !hero.isSecret);
  }
}
