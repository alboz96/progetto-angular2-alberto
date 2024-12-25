import {MissingTranslationHandler, MissingTranslationHandlerParams} from '@ngx-translate/core';
import { LabelService } from './services/label-service/label.service';
import { UtilsService } from './utils.service';

export class CustomMissingTranslationHandler implements MissingTranslationHandler {
    constructor(
      private labelService: LabelService,
      private utilsService: UtilsService) {
       }
    handle(params: MissingTranslationHandlerParams) {
        let translationId = params.key;
        let translateService = params.translateService;

        if(!this.utilsService.isEmpty(translationId)){
            if(translationId.indexOf("custom_") >= 0){ //quelle custom le gestisco lato server
                this.labelService.translateLabel(translationId, translateService.currentLang);
                return "gestito da server"; //chiamata rest tramite http
            } else {
                return translationId; //in caso contrario ritorno la chiave della traduzione come label
            }
        }
    }
  }
