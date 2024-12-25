import { Injectable, Optional } from '@angular/core';
import { UserServiceConfig } from './user.service.config';

@Injectable()
/** Dummy version of an authenticated user service */
export class User2Service {
userName: string;
  constructor(@Optional() config: UserServiceConfig) {
    if (config) {
       this.userName = config.userName; 
      } else { 
         this.userName = 'Sherlock Holmes'; 
        }
  }
  

}
