import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core/src/translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  filter:string = "";

  constructor(translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('it');

     // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('it');
}

  sidebarFilter(searchText) {
    // console.log(searchText);
    this.filter = searchText;
  }
}
