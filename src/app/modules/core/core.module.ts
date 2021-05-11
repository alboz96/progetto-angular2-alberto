import {
    ModuleWithProviders, NgModule,
    Optional, SkipSelf }       from '@angular/core';
  import { CommonModule }      from '@angular/common';
import { UserService } from '../../services/user-service/user.service';
import { MainTitleComponent } from '../../shared/components/main-title/main-title.component';
import { UserServiceConfig } from '../../services/user.service.config';



  @NgModule({
    imports:      [ CommonModule ],
    declarations: [ MainTitleComponent ],
    exports:      [ MainTitleComponent ],
    providers:    [ UserService ]
  })
  export class CoreModule {
    static forRoot(config: UserServiceConfig): ModuleWithProviders {
      return {
        ngModule: CoreModule,
        providers: [
          {provide: UserServiceConfig, useValue: config }
        ]
      };
    }
  }
