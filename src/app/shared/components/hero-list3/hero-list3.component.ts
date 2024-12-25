// Observable Version
import { Component, OnInit } from '@angular/core';
import { Hero3Service } from '../../../services/hero3-service/hero3.service';
import { Hero4 } from '../../../models/hero4';
import { MockService } from '../../../services/mock-service/mock.service';

@Component({
  selector: 'hero-list-3',
  templateUrl: './hero-list3.component.html',
  providers: [ Hero3Service ],
  styles: ['.error {color:red;}']
})
export class HeroList3Component implements OnInit {
  errorMessage: string;
  heroes: Hero4[];
  newHero: Hero4;
  mode = 'Observable';

  constructor (private heroService: Hero3Service,
               private mockService: MockService) {}

  ngOnInit() { this.getHeroes(); }

  // Gestito con pattern Observable e Subscribe

  // getHeroes() {
  //   this.heroService.getHeroes()
  //                    .subscribe(
  //                      heroes => this.heroes = heroes,
  //                      error =>  this.errorMessage = <any>error);
  // }

  // Gestito con pattern Observable e Subscribe

  // addHero(name: string) {
  //   if (!name) { return; }
  //   this.heroService.create(name)
  //                    .subscribe(
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
