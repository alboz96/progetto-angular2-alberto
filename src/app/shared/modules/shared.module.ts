import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { AwesomePipe } from '../../pipes/awesome.pipe';
import { ExponentialStrengthPipe } from '../../pipes/exponential-strength.pipe';
import { FetchJsonPipe } from '../../pipes/fetch-json.pipe';
import { FlyingHeroesPurePipe } from '../../pipes/flying-heroes-pure.pipe';
import { FlyingHeroesImpurePipe } from '../../pipes/flying-heroes-impure.pipe';

@NgModule({
  imports:      [ CommonModule ], //Importato perchè serve per le direttive ngIf e ngFor 
  declarations: [ AwesomePipe,
                  ExponentialStrengthPipe,
                  FlyingHeroesPurePipe,
                  FlyingHeroesImpurePipe,
                  FetchJsonPipe ],
  exports:      [ AwesomePipe,
                  ExponentialStrengthPipe,
                  FlyingHeroesPurePipe,
                  FlyingHeroesImpurePipe,
                  FetchJsonPipe,
                  CommonModule,
                  FormsModule ] //esportati perchè gli altri moduli usano le direttive ngIf e ngFor (CommonModule) e ngModel (FormsModule)
})
// SharedModule hanno nella lista degli exports CommonModule e FormsModule cosi' i moduli che
// importeranno SharedModule otterranno CommonModule and FormsModule in automatico senza doversi importare singolarmente
// ogni volta i due moduli.

// NON SI DEVE dichiarare (generalizzare) un app-wide singleton provider (servizio singleton globale nell'applicazione) 
// come ad esempio UserService in un shared module 
// Un lazy-loaded module che importa quel shared module al suo interno, creerà una copia di quel servizio,
// non gestendolo piu' come singleton nell'applicazione intera.
export class SharedModule { }