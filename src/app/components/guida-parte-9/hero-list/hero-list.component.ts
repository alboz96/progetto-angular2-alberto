import { Component, OnInit } from '@angular/core';
import { Hero3 } from '../../../models/hero3';
import { HeroService } from '../../../../app/services/hero-service/hero.service';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes: Hero3[];

  constructor(heroService: HeroService)
  {
    this.heroes = heroService.getHeroes();
  }

  ngOnInit(): void {

  }

}
