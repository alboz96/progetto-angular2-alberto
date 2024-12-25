import { Injectable } from "@angular/core";

@Injectable()
export class UserServiceConfig {
    userName = 'configuredUserName';
    constructor(data: any) {
        this.userName = data.userName;
    };

}