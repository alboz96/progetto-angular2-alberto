import { Injectable } from '@angular/core';
import { BaseRequestOptions, RequestOptions } from '@angular/http';

@Injectable()
export class DefaultRequestOptions extends BaseRequestOptions {

  constructor() {
    super();

    // Set the default 'Content-Type' header
    this.headers.set('Content-Type', 'application/json');
    // This is to enable CORS
    this.headers.set('Access-Control-Allow-Origin', '*');
  }
}

export const requestOptionsProvider = { provide: RequestOptions, useClass: DefaultRequestOptions };
