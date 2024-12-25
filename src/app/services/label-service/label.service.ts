import { Injectable } from '@angular/core';

@Injectable()
export class LabelService {

  constructor() { }

  translateLabel(key: string, language: string){
    console.log("Chiamo servizio BE per tradurre label mancante su front-end.");
    console.log("La chiave è: " + key + " e la lingua è: " + language);
  }

}
