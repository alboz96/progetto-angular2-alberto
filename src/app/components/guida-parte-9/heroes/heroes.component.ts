import { Component } from '@angular/core';
import {HeroListComponent} from '../hero-list/hero-list.component';
import { HeroService } from '../../../../app/services/hero-service/hero.service';
import { heroServiceProvider } from '../../../services/hero.service.provider';
@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [],
  //  providers: [HeroService] //HeroService se dovesse avere un booleano iniettato da un altro servizio ha bisogno di un provider
  providers: [heroServiceProvider]
})
export class HeroesComponent { }