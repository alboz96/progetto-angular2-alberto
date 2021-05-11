import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ng-guida-11-6',
  templateUrl: './ng-guida-11-6.component.html',
  styleUrls: ['./ng-guida-11-6.component.css']
})

// Sempre implementare le interfacce relative al lifecycle hook da usare
export class NgGuida116Component implements OnInit {

  constructor() { }

  // ngOnChanges(changes: SimpleChanges): void {
    // Chiamato prima di ogni lifecycle hook. 
    // Usare questo metodo per iniettare dipendenze, ma evita ogni lavoro serio qui dentroS.
    // Aggiungi '${implements OnChanges}' alla class.
    // L'oggetto SimpleChanges contiene i valori correnti e precedenti della proprietà variata
    // console.log('OnChanges');
  // }

  // metodo implementato da interfaccia
  ngOnInit() {
    // console.log('OnInit');
  }

  goToAnchor(id) {
    document.getElementById(id).scrollIntoView();
  }

}
