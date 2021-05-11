/* tslint:disable use-pipe-transform-interface */
import { Pipe, PipeTransform } from '@angular/core';
import { Flyer } from '../models/hero5';


@Pipe({ name: 'flyingHeroes' })
export class FlyingHeroesPurePipe implements PipeTransform {
  transform(allHeroes: Flyer[]) {
    return allHeroes.filter(hero => hero.canFly);
  }
}
