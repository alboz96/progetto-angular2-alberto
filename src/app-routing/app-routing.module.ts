import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { NotFoundComponent } from '../app/components/template/not-found/not-found.component';
import { Ng2Guida61Component } from '../app/components/guida-parte-6/ng2-guida-6-1/ng2-guida-6-1.component';
import { Ng2Guida62Component } from '../app/components/guida-parte-6/ng2-guida-6-2/ng2-guida-6-2.component';
import { Ng2Guida63Component } from '../app/components/guida-parte-6/ng2-guida-6-3/ng2-guida-6-3.component';
import { Ng2Guida64Component } from '../app/components/guida-parte-6/ng2-guida-6-4/ng2-guida-6-4.component';
import { NgGuida71Component } from '../app/components/guida-parte-7/ng-guida-7-1/ng-guida-7-1.component';
import { NgGuida72Component } from '../app/components/guida-parte-7/ng-guida-7-2/ng-guida-7-2.component';
import { NgGuida81Component } from '../app/components/guida-parte-8/ng-guida-8-1/ng-guida-8-1.component';
import { NgGuida91Component } from '../app/components/guida-parte-9/ng-guida-9-1/ng-guida-9-1.component';
import { NgGuida101Component } from '../app/components/guida-parte-10/ng-guida-10-1/ng-guida-10-1.component';
import { NgGuida102Component } from '../app/components/guida-parte-10/ng-guida-10-2/ng-guida-10-2.component';
import { NgGuida103Component } from '../app/components/guida-parte-10/ng-guida-10-3/ng-guida-10-3.component';
import { NgGuida104Component } from '../app/components/guida-parte-10/ng-guida-10-4/ng-guida-10-4.component';
import { NgGuida112Component } from '../app/components/guida-parte-11/ng-guida-11-2/ng-guida-11-2.component';
import { NgGuida113Component } from '../app/components/guida-parte-11/ng-guida-11-3/ng-guida-11-3.component';
import { NgGuida114Component } from '../app/components/guida-parte-11/ng-guida-11-4/ng-guida-11-4.component';
import { NgGuida115Component } from '../app/components/guida-parte-11/ng-guida-11-5/ng-guida-11-5.component';
import { NgGuida116Component } from '../app/components/guida-parte-11/ng-guida-11-6/ng-guida-11-6.component';
import { NgGuida118Component } from '../app/components/guida-parte-11/ng-guida-11-8/ng-guida-11-8.component';
import { NgGuida119Component } from '../app/components/guida-parte-11/ng-guida-11-9/ng-guida-11-9.component';
import { NgGuida1110Component } from '../app/components/guida-parte-11/ng-guida-11-10/ng-guida-11-10.component';
import { HeroDetailComponent } from '../app/shared/components/hero-detail/hero-detail.component';
import { HeroDetailRouteComponent } from '../app/shared/components/hero-detail-route/hero-detail-route.component';
import { RadioItemListComponent } from '../app/components/esempi-utili-lavoro/radio-item-list/radio-item-list.component';
import { DownloadUploadComponent } from '../app/components/esempi-utili-lavoro/download-upload/download-upload.component';
import { TranslateComponent } from '../app/components/esempi-utili-lavoro/translate/translate.component';

const componentsMap: any = {'HomeComponent': HomeComponent, 'NotFoundComponent': NotFoundComponent};
const routes: Routes = [
  // Le Routes funzionano con un algoritmo di first match wins, viene caricata la prima corrispondente a quella cercata

  // IMPORTANTE: Gestisce il redirect di default se il path dell'applicazione e' vuoto
  // Se il Path e' completamente vuoto, viene eseguito il redirect al path /home
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  // L'altro possibile valore per pathMatch e' 'prefix' il quale dice al router di fare il match per il redirect route quando l'URL rimanente INIZIA con il prefisso del path del route di redirect 
  { path: 'home',  component: HomeComponent },
  { path: 'esempio1',  component: Ng2Guida61Component},
  { path: 'esempio2',  component: Ng2Guida62Component},
  { path: 'esempio3',  component: Ng2Guida63Component},
  { path: 'esempio4',  component: Ng2Guida64Component},
  { path: 'esempio5',  component: NgGuida71Component},
  { path: 'esempio6',  component: NgGuida72Component},
  { path: 'esempio7',  component: NgGuida81Component},
  { path: 'esempio8',  component: NgGuida91Component},
  { path: 'esempio9',  component: NgGuida101Component},
  { path: 'esempio10', component: NgGuida102Component},
  { path: 'esempio11', component: NgGuida103Component},
  { path: 'esempio12', component: NgGuida104Component},
  { path: 'esempio13', component: NgGuida112Component},
  { path: 'esempio14', component: NgGuida113Component},
  { path: 'esempio15', component: NgGuida114Component},
  { path: 'esempio16', component: NgGuida115Component},
  { path: 'esempio17', component: NgGuida116Component},
  // PRIMA (Carico il componente sulla seguente rotta, quindi il suo modulo è in Eager Loading nell'AppModule)
  // { path: 'esempio18', component: NgGuida118Component},
  // DOPO (Lazy Loading del modulo)
  { path: 'esempio18', loadChildren: 'app/modules/contact/contact.module#ContactModule' }, //carica il modulo ContactModule in maniera lazy
  { path: 'esempio19', component: NgGuida119Component},
  {
    path: 'esempio20/:id',
    component: NgGuida1110Component,
    data: { title: 'Titolo Statico' },
    children: [
      {path: 'heroDetail/:heroId', component: HeroDetailRouteComponent }
    ]
  },
  { path: 'esempio48', component: TranslateComponent},
  { path: 'esempio49', component: RadioItemListComponent},
  { path: 'esempio50', component: DownloadUploadComponent},
  // wildcard che indica una route differente da qualsiasi delle precedenti
  // IMPORTANTE: La wildcard ** deve essere l'ultima route nella lista
  { path: '**', component: NotFoundComponent}

];
const options = {useHash: true}; //, enableTracing: true per debuggare tutti gli step del routing

export const APP_ROUTER_CONFIG = RouterModule.forRoot(routes, options);

@NgModule({
  imports: [
    APP_ROUTER_CONFIG
     ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {
  constructor() {
  }
}
