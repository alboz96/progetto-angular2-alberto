import { Pipe, PipeTransform } from '@angular/core';
import { Http }                from '@angular/http';

import 'rxjs/add/operator/map';

@Pipe({
  name: 'fetch',
  pure: false
})
export class FetchJsonPipe  implements PipeTransform {
  private cachedData: any = null;
  private cachedUrl = '';

  constructor(private http: Http) { }

  transform(filename: string): any {
    if (filename !== this.cachedUrl) {
      this.cachedData = null;
      this.cachedUrl = filename;
      if(filename == "heroes-pipe" || filename == "myMap"){
        this.http.get("assets/mock/" + filename + ".json")
        .map( result => result.json() )
        .subscribe( result => this.cachedData = result );
      }

    }

    return this.cachedData;
  }
}
