import { SimpleChanges, Input, Component, OnChanges } from "@angular/core";

class Hero {
  constructor(public name: string) {}
}

@Component({
  selector: 'on-changes',
  templateUrl: './on-changes.component.html',
  styles: [ '.hero {background: LightYellow; padding: 8px; margin-top: 8px}',
  'p {background: Yellow; padding: 8px; margin-top: 8px}']
})
export class OnChangesComponent implements OnChanges {
  @Input() hero: Hero;
  @Input() power: string;

  changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    //ciclo tutte le properties di changes (così da intercettare ogni property modificata)
    for (let propName in changes) {
      //oggetto per la singola property
      let chng = changes[propName];
      //valore corrente property (NUOVO)
      let cur  = JSON.stringify(chng.currentValue);
      //valore precedente property (OLD)
      let prev = JSON.stringify(chng.previousValue);
      //array di stringhe per annotare le modifiche
      this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }
  //cancello l'array di stringhe
  reset() { this.changeLog.length = 0; }
}
