import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./components/app-component/app.component";
import { SidebarComponent } from "./components/template/sidebar/sidebar.component";
import { NavbarComponent } from "./components/template/navbar/navbar.component";
import { FooterComponent } from "./components/template/footer/footer.component";
import { NotFoundComponent } from "./components/template/not-found/not-found.component";
import { HomeComponent } from "./components/home/home.component";

import { MockService } from "../app/services/mock-service/mock.service";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { AppRoutingModule } from "../app-routing/app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Ng2Guida61Component } from "./components/guida-parte-6/ng2-guida-6-1/ng2-guida-6-1.component";
import { Ng2Guida62Component } from "./components/guida-parte-6/ng2-guida-6-2/ng2-guida-6-2.component";
import { Ng2Guida63Component } from "./components/guida-parte-6/ng2-guida-6-3/ng2-guida-6-3.component";
import { Ng2Guida64Component } from "./components/guida-parte-6/ng2-guida-6-4/ng2-guida-6-4.component";
import { NgGuida71Component } from "./components/guida-parte-7/ng-guida-7-1/ng-guida-7-1.component";
import { NgGuida72Component } from "./components/guida-parte-7/ng-guida-7-2/ng-guida-7-2.component";
import { NgGuida81Component } from "./components/guida-parte-8/ng-guida-8-1/ng-guida-8-1.component";
import { NgGuida91Component } from "./components/guida-parte-9/ng-guida-9-1/ng-guida-9-1.component";
import { HeroesComponent } from "./components/guida-parte-9/heroes/heroes.component";
import { HeroListComponent } from "./components/guida-parte-9/hero-list/hero-list.component";
import { HeroService } from "../app/services/hero-service/hero.service";
import { Logger } from "../app/services/logger-service/logger.service";
import { HERO_DI_CONFIG, APP_CONFIG } from "../../app.config";
import { UserService } from "../app/services/user-service/user.service";
import { Car } from "./components/guida-parte-9/car/car";
import { CarComponent } from "./components/guida-parte-9/car/car.component";
import { InjectorComponent } from "./components/guida-parte-9/injector-component/injector.component";
import { testCar } from "./components/guida-parte-9/car/car-creations";
import {
  Provider1Component,
  Provider4Component,
  Provider3Component,
  Provider5Component,
  Provider6aComponent,
  Provider6bComponent,
  Provider7Component,
  Provider8Component,
  Provider9Component,
  Provider10Component,
  ProvidersComponent,
} from "./components/guida-parte-9/providers-component/providers.component";
import { TestComponent } from "./components/guida-parte-9/test-component/test.component";
import { NgGuida101Component } from "./components/guida-parte-10/ng-guida-10-1/ng-guida-10-1.component";
import { NgGuida102Component } from "./components/guida-parte-10/ng-guida-10-2/ng-guida-10-2.component";
import { NgGuida103Component } from "./components/guida-parte-10/ng-guida-10-3/ng-guida-10-3.component";
import { NgGuida104Component } from "./components/guida-parte-10/ng-guida-10-4/ng-guida-10-4.component";
import { SizerComponent } from "./shared/components/sizer/sizer.component";
import { HeroDetailComponent } from "./shared/components/hero-detail/hero-detail.component";
import { HighlightDirective } from "./directives/highlight.directive";
import { NgGuida112Component } from "./components/guida-parte-11/ng-guida-11-2/ng-guida-11-2.component";
import { NgGuida111Component } from "./components/guida-parte-11/ng-guida-11-1/ng-guida-11-1.component";
import { NgGuida113Component } from "./components/guida-parte-11/ng-guida-11-3/ng-guida-11-3.component";
import { NgGuida114Component } from "./components/guida-parte-11/ng-guida-11-4/ng-guida-11-4.component";
import { HeroDetail2Component } from "./shared/components/hero-detail2/hero-detail2.component";
import { HeroList2Component } from "./shared/components/hero-list2/hero-list2.component";
import { Hero2Service } from "../app/services/hero2-service/hero2.service";
import { NgGuida115Component } from "./components/guida-parte-11/ng-guida-11-5/ng-guida-11-5.component";
import { HeroList3Component } from "./shared/components/hero-list3/hero-list3.component";
import { HttpModule, JsonpModule } from "@angular/http";
import { WikiComponent } from "./shared/components/wiki/wiki.component";
import { WikiSmartComponent } from "./shared/components/wiki-smart/wiki-smart.component";
import { HeroListPromiseComponent } from "./shared/components/hero-list-promise/hero-list.component.promise";
// import { HeroData } from '../shared/models/hero-data';
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { SubcriptionComponent } from "./shared/components/subcription/subcription.component";
import { ObservableRxjsComponent } from "./shared/components/observable-rxjs/observable-rxjs.component";
import { SubjectComponent } from "./shared/components/subject/subject.component";
import { SchedulerComponent } from "./shared/components/scheduler/scheduler.component";
import { requestOptionsProvider } from "./components/guida-parte-11/ng-guida-11-5/defaultRequestOptions.service";
import { NgGuida116Component } from "./components/guida-parte-11/ng-guida-11-6/ng-guida-11-6.component";
import { PeekABooComponent } from "./shared/components/peek-a-boo/peek-a-boo.component";
import { Logger2Service } from "../app/services/logger-service/logger2.service";
import { PeekABooParentComponent } from "./shared/components/peek-a-boo-parent/peek-a-boo-parent.component";
import { SpyParentComponent } from "./shared/components/spy-parent/spy-parent.component";
import { SpyDirective } from "./directives/spy.directive";
import { OnChangesComponent } from "./shared/components/on-changes/on-changes.component";
import { OnChangesParentComponent } from "./shared/components/on-changes-parent/on-changes-parent.component";
import { DoCheckComponent } from "./shared/components/do-check/do-check.component";
import { DoCheckParentComponent } from "./shared/components/do-check-parent/do-check-parent.component";
import { AfterViewComponent } from "./shared/components/after-view/after-view.component";
import { AfterViewParentComponent } from "./shared/components/after-view-parent/after-view-parent.component";
import { AfterContentComponent } from "./shared/components/after-content/after-content.component";
import { AfterContentParentComponent } from "./shared/components/after-content-parent/after-content-parent.component";
import { ChildViewComponent } from "./shared/components/child-view/child-view.component";
import { ChildComponent } from "./shared/components/child/child.component";
import { MyCounterComponent } from "./shared/components/my-counter/my-counter.component";
import { CounterParentComponent } from "./shared/components/counter-parent/counter-parent.component";

import { ContactModule } from "./modules/contact/contact.module";
import { CoreModule } from "./modules/core/core.module";
import { MainTitleComponent } from "./shared/components/main-title/main-title.component";
import { NgGuida119Component } from "./components/guida-parte-11/ng-guida-11-9/ng-guida-11-9.component";
import { ExponentialStrengthPipe } from "./pipes/exponential-strength.pipe";
import { SharedModule } from "./shared/modules/shared.module";
import { FlyingHeroesComponent } from "./shared/components/flying-heroes/flying-heroes.component";
import { HeroAsyncMessageComponent } from "./shared/components/hero-async-message/hero-async-message.component";
import { HeroListImpureComponent } from "./shared/components/hero-list-impure-pipe/hero-list.component";
import { NgGuida1110Component } from "./components/guida-parte-11/ng-guida-11-10/ng-guida-11-10.component";
import { HeroDetailRouteComponent } from "./shared/components/hero-detail-route/hero-detail-route.component";
import { RadioItemListComponent } from "./components/esempi-utili-lavoro/radio-item-list/radio-item-list.component";
import { DownloadUploadComponent } from "./components/esempi-utili-lavoro/download-upload/download-upload.component";
import {
  TranslateModule,
  TranslateLoader,
  MissingTranslationHandler,
} from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateComponent } from "./components/esempi-utili-lavoro/translate/translate.component";
import { LabelService } from "./services/label-service/label.service";
import { CustomMissingTranslationHandler } from "./custom-missing-translation-handler";
import { UtilsService } from "./utils.service";
import { IS_AUTHORIZED } from "./services/hero.service.provider";

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  // List of components, directives, and pipes that belong to this module.
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    HomeComponent,
    Ng2Guida61Component,
    Ng2Guida62Component,
    Ng2Guida63Component,
    Ng2Guida64Component,
    NgGuida71Component,
    NgGuida72Component,
    NgGuida81Component,
    NgGuida91Component,
    NgGuida101Component,
    NgGuida102Component,
    NgGuida103Component,
    NgGuida104Component,
    NgGuida111Component,
    NgGuida112Component,
    NgGuida113Component,
    NgGuida114Component,
    HeroesComponent,
    HeroListComponent,
    HeroList2Component,
    CarComponent,
    TestComponent,
    InjectorComponent,
    ProvidersComponent,
    Provider1Component,
    Provider3Component,
    Provider4Component,
    Provider5Component,
    Provider6aComponent,
    Provider6bComponent,
    Provider7Component,
    Provider8Component,
    Provider9Component,
    Provider10Component,
    SizerComponent,
    HeroDetailComponent,
    HeroDetail2Component,
    HighlightDirective,
    SpyDirective,
    NgGuida115Component,
    HeroList3Component,
    WikiComponent,
    WikiSmartComponent,
    HeroListPromiseComponent,
    ObservableRxjsComponent,
    SubcriptionComponent,
    SubjectComponent,
    SchedulerComponent,
    NgGuida116Component,
    PeekABooComponent,
    PeekABooParentComponent,
    SpyParentComponent,
    OnChangesComponent,
    OnChangesParentComponent,
    DoCheckComponent,
    DoCheckParentComponent,
    AfterViewComponent,
    AfterViewParentComponent,
    AfterContentComponent,
    AfterContentParentComponent,
    ChildViewComponent,
    ChildComponent,
    MyCounterComponent,
    CounterParentComponent,
    DownloadUploadComponent,
    NgGuida119Component,
    FlyingHeroesComponent,
    HeroAsyncMessageComponent,
    HeroListImpureComponent,
    NgGuida1110Component,
    HeroDetailRouteComponent,
    RadioItemListComponent,
    TranslateComponent,
    // NgGuida118Component,
    // ContactComponent, //Si trova gia' in ContactModule (quindi se devo usarlo anche in AppModule, lo posso esportare dal ContactModule ed importarlo nell'AppModule)
    // AwesomePipe, //Si trova gia' in ContactModule (quindi se devo usarlo anche in AppModule, lo posso esportare dal ContactModule ed importarlo nell'AppModule)
    // TitleComponent //Si trova gia' in ContactModule (quindi se devo usarlo anche in AppModule, lo posso esportare dal ContactModule ed importarlo nell'AppModule)
    // Cio' che accomuna più moduli conviene inserirlo nello SharedModule
  ],
  // List of modules to import into this module. Everything from the imported modules is available to declarations of this module.
  imports: [
    BrowserModule, // per bootstrap applicazione
    AppRoutingModule, // per routing
    HttpClientModule, // per chiamate http
    FormsModule, // per template driven form e NgModel
    ReactiveFormsModule, // per reactive forms
    HttpModule,
    JsonpModule,
    SharedModule, //modulo condiviso con tutti i moduli (è come se fosse un Common)
    // ContactModule, //MODULO CUSTOM MIO IMPORTANTE:(caricato in maniera Lazy dal routing, quindi non lo importo direttamente nell'AppModule)
    CoreModule.forRoot({ userName: "Miss Marple" }), // NOTA: Il forRoot si puo' usare solo nell'AppModule
    // MODULO CUSTOM MIO: Nel core vanno messi i servizi da istanziare una volta per tutta l'applicazione (singleton)
    // e componenti usati una volta sola come ad esempio gli Spinner e le Modali e il titolo dell'applicazione (main-title)
    // il CoreModule bisogna importarlo solo una volta in AppModule
    // InMemoryWebApiModule.forRoot(HeroData)
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: CustomMissingTranslationHandler,
        deps: [LabelService, UtilsService],
      },
    }), //modulo esterno per le traduzioni
  ],
  // List of dependency injection providers visible both to the contents of this module and to importers of this module.
  providers: [
    requestOptionsProvider,
    MockService,
    HeroService,
    Hero2Service,
    LabelService,
    UtilsService,
    Logger,
    Logger2Service,
    //Logger si può scrivere anche cosi:
    // [{ provide: Logger, useClass: Logger }]
    // in cui in provide viene inserita la chiave della mappa che servirà al momento dell'istanza del servizio e per linkare
    // il servizio stesso alla classe passata come valore a useClass, in quanto si potrebbe voler sostituire il Logger originale
    // con uno mock o migliore, esempio:
    // [{ provide: Logger, useClass: BetterLogger }
    // UserService, //Si trova gia' in CoreModule,
    // User2Service, //Si trova gia' in ContactModule, quindi e' gia' disponibile in questo modulo
    // ContactService, //Si trova gia' in ContactModule, quindi e' gia' disponibile in questo modulo
    { provide: IS_AUTHORIZED, useValue: true }, // Valore booleano da iniettare
    { provide: APP_CONFIG, useValue: HERO_DI_CONFIG },
  ],
  exports: [RouterModule], // Lista di moduli da rendere disponibili all'esterno
  // List of components to bootstrap when this module is bootstrapped.
  bootstrap: [AppComponent],
})
export class AppModule {}
