import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Data, Params } from '@angular/router';
import { Hero2Service } from '../../../services/hero2-service/hero2.service';
import { Hero } from '../../../models/data-model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-ng-guida-11-10',
  templateUrl: './ng-guida-11-10.component.html',
  styleUrls: ['./ng-guida-11-10.component.css']
})
export class NgGuida1110Component implements OnInit {

  myDataParams: Data;
  myPathParams: Params;
  myQueryParam: Params;
  isLoading: boolean;
  heroes: Observable<Hero[]>;
  selectedHero: Hero;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private heroService2: Hero2Service ) { }

  ngOnInit() {
    // Data Params
    console.log(this.activatedRoute.snapshot.data);
    this.myDataParams = this.activatedRoute.snapshot.data["title"];
    // Path Params
    console.log(this.activatedRoute.snapshot.params);
    this.myPathParams = this.activatedRoute.snapshot.params["id"];
    // Query Params
    console.log(this.activatedRoute.snapshot.queryParams);
    this.myQueryParam = this.activatedRoute.snapshot.queryParams["myQueryParam"];
    //Child Routes
    this.getHeroes();
  }

  getHeroes() {
    this.isLoading = true;
    this.heroes = this.heroService2.getHeroes()
                      // Todo: error handling
                      .finally(() => this.isLoading = false);
    this.selectedHero = undefined;
  }

  select(hero: Hero) { 
    this.selectedHero = hero; 
    this.router.navigate([`esempio20/${this.myPathParams}/heroDetail`, hero.id]);
    // PASSARE PARAMETRI CON ROUTER NAVIGATE, in Url Matrix Notation
    // this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
    // Il risultato sarà avere il seguente URL:
    // localhost:3000/heroes;id=15;foo=foo
    // NOTA: I parametri sono separati da ; e non da ? e &, come per i query params
  }

}
