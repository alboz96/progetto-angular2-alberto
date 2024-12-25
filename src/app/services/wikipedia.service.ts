import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class WikipediaService {
  constructor(private jsonp: Jsonp) {}

  search (term: string) {

    //API di wikipedia
    let wikiUrl = 'http://it.wikipedia.org/w/api.php';

    let params = new URLSearchParams();
    params.set('search', term); // the user's search value
    params.set('action', 'opensearch');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');

    //E' la stessa cosa di scrivere
    // let queryString =  `?search=${term}&action=opensearch&format=json&callback=JSONP_CALLBACK`;

    // TODO: Add error handling
    return this.jsonp
               .get(wikiUrl, { search: params })
               .map(response => <string[]> response.json()[1]);
  }
}
