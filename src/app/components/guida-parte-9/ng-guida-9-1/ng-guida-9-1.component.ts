import { Component, OnInit, Inject } from '@angular/core';
import { APP_CONFIG, AppConfig } from '../../../../../app.config';
import { UserService } from '../../../../app/services/user-service/user.service';

@Component({
  selector: 'app-ng-guida-9-1',
  templateUrl: './ng-guida-9-1.component.html',
  styleUrls: ['./ng-guida-9-1.component.css']
})
export class NgGuida91Component {

  title: string;

  constructor(
    @Inject(APP_CONFIG) config: AppConfig,
    private userService: UserService) { //INIETTO IL SERVIZIO UserService che è un @Injectable()
    this.title = config.title;
  }

  get isAuthorized() { return this.user.isAuthorized; }
  nextUser()         { this.userService.getNewUser(); }
  get user()         { return this.userService.user; }

  get userInfo()     {
    return `Current user, ${this.user.name}, is ` +
           `${this.isAuthorized ? '' : 'not'} authorized. `;
  }
}
