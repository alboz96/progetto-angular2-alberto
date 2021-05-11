import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { ContactComponent } from '../../shared/components/contact/contact.component';
import { ContactService } from '../../services/contact.service';

import { AwesomePipe } from '../../pipes/awesome.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { User2Service } from '../../services/user2.service';
import { ContactRoutingModule } from '../../../app-routing/contact-routing.module';
import { NgGuida118Component } from '../../components/guida-parte-11/ng-guida-11-8/ng-guida-11-8.component';
import { TitleComponent } from '../../shared/components/title/title.component';
import { SharedModule } from '../../shared/modules/shared.module';
import { UserServiceConfig } from '../../services/user.service.config';

// I Modules non ereditano l'accesso ai components, directives, o pipes che sono dichiarati in altri moduli. 
// Cio' che viene importato da AppModule (componenti, direttive, pipes) e' irrilevante per gli altri moduli (es: ContactModule) e viceversa. 
// Prima di usare [(ngModel)] in ContactComponent, ContactModule ovvero il suo modulo DEVE importare FormsModule.

//BrowserModule da' errore se importato in un modulo che lo carica in maniera lazy.
//Al suo posto va sempre importato CommonModule, in tutti i moduli, 
//tranne nell'AppModule in quanto importa gia' il BrowserModule che contiene al suo interno il CommonModule

@NgModule({ 
  imports:      [ SharedModule, ContactRoutingModule ], //moduli di cui ha bisogno
  declarations: [ NgGuida118Component, ContactComponent, TitleComponent, HighlightDirective ], //dichiarate per la prima volta in questo modulo
  // exports:      [ ContactComponent ], //componenti, direttive, pipe all'interno di questo modulo che deve rendere disponibili agli altri moduli, tra cui AppModule
  providers:    [ ContactService, User2Service ] //servizi definiti per questo modulo e resi disponibili all'esterno (agli altri moduli)
//UserServiceConfig e' iniettato come servizio di configurazione nell'import del CoreModule, chiamando il forRoot all'interno dell'AppModule
})
export class ContactModule { }