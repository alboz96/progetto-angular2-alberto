import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import 'rxjs/add/operator/finally';
import { Hero } from '../../../models/data-model';
import { Hero2Service } from '../../../services/hero2-service/hero2.service';


@Component({
  selector: 'hero-list-2',
  templateUrl: './hero-list2.component.html',
  styleUrls: ['./hero-list2.component.css']
})
export class HeroList2Component implements OnInit {
  heroes: Observable<Hero[]>;
  isLoading = false;
  selectedHero: Hero;

  constructor(private heroService2: Hero2Service) { }

  ngOnInit() { this.getHeroes(); }

  getHeroes() {
    this.isLoading = true;
    this.heroes = this.heroService2.getHeroes()
                      // Todo: error handling
                      .finally(() => this.isLoading = false);
    this.selectedHero = undefined;
  }

  select(hero: Hero) { this.selectedHero = hero; }
}
