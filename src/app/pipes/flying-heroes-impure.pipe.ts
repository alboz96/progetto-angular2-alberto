import { FlyingHeroesPurePipe } from "./flying-heroes-pure.pipe";
import { PipeTransform, Pipe } from "@angular/core";

/////// Identical except for the pure flag
@Pipe({
    name: 'flyingHeroesImpure',
    pure: false
  })
  export class FlyingHeroesImpurePipe extends FlyingHeroesPurePipe  implements PipeTransform {}
