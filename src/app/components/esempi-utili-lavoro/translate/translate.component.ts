import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent implements OnInit {

  param = {value: 'world'};

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
  }

  cambioLingua() {
    let currentLang = this.translateService.currentLang;
    if(currentLang == "it"){
      this.translateService.use("en");
    } else if (currentLang == "en"){
      this.translateService.use("it");
    }

  }

}
