import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../../models/hero';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Hero2Service } from '../../../services/hero2-service/hero2.service';

@Component({
  selector: 'app-hero-detail-route',
  templateUrl: './hero-detail-route.component.html',
  styleUrls: ['./hero-detail-route.component.css']
})
export class HeroDetailRouteComponent implements OnInit {

  hero: Hero;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private heroService2: Hero2Service) { }

  ngOnInit() {
    // (+) converte la stringa dentro la property 'id' in un number
    // The switchMap operator allows you to perform an action with the current value of the Observable, and map it to a new Observable
    // The switchMap operator allows you to perform an action with the current value of the Observable, and map it to a new Observable. As with many rxjs operators, switchMap handles an Observable as well as a Promise to retrieve the value they emit.
    // The switchMap operator will also cancel any in-flight requests if the user re-navigates to the route while still retrieving a hero.
    // Use the subscribe method to detect id changes and to (re)set the retrieved Hero
    console.log(this.activatedRoute.snapshot.params);
    this.activatedRoute.params
    .switchMap((params: Params) => this.heroService2.getHero(+params['heroId']))
    .subscribe((hero: Hero) => {
      this.hero = hero;
      console.log(hero);
    });
  }

  gotoHeroes() {
    let heroId = this.hero ? this.hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
  }

}
