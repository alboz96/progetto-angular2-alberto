// Promise Version
import { Component, OnInit } from '@angular/core';
import { Hero4 } from '../../../models/hero4';
import { HeroServicePromise } from '../../../services/hero.service.promise';
import { MockService } from '../../../services/mock-service/mock.service';

@Component({
  selector: 'hero-list-promise',
  templateUrl: './hero-list3.component.html',
  providers: [ HeroServicePromise ],
  styles: ['.error {color:red;}']
})
export class HeroListPromiseComponent implements OnInit {
  errorMessage: string;
  heroes: Hero4[];
  newHero: Hero4;
  mode = 'Promise';

  constructor (private heroService: HeroServicePromise,
               private mockService: MockService) {}

  ngOnInit() { this.getHeroes(); }

  //Servizio gestito con PROMISE di un servizio reale

  // getHeroes() {
  //   this.heroService.getHeroes()
  //                    .then(
  //                      heroes => this.heroes = heroes,
  //                      error =>  this.errorMessage = <any>error);
  // }

  //Servizio gestito con PROMISE di un servizio reale

  // addHero (name: string) {
  //   if (!name) { return; }
  //   this.heroService.addHero(name)
  //                    .then(
  //                      hero  => this.heroes.push(hero),
  //                      error =>  this.errorMessage = <any>error);
  // }

  getHeroes() {
    this.mockService.getFileContent('hero').subscribe(
      data => this.heroes = data.heroes,
      error =>  this.errorMessage = <any>error);
  }

    addHero(name: string) {
      if (!name) { return; }
      let lastId = this.heroes[ this.heroes.length - 1].id;
      lastId += 1;
      this.newHero = new Hero4(lastId, name);
      this.heroes.push(this.newHero);
  }
}
