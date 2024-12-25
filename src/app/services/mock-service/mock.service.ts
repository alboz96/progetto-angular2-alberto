import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class MockService {

  response: any; // will create a real type later
  obs: Observable<any>;

  constructor(private http: HttpClient) {
  
  }

  getFileContent(filename) {
    return this.http
    .get("assets/mock/" + filename + ".json")
    .map((resp: Response): any => {
      return resp;
    });
  }
}
