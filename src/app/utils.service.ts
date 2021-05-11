import { Injectable } from "@angular/core";

@Injectable()
export class UtilsService {

    constructor(
    ) { }

    formatDate(date: Date): string {
        let year = date.getFullYear().toString();
        let month = (date.getMonth() + 1).toString();
        let day = date.getDate().toString();
        if (day.length === 1) day = "0" + day;
        if (month.length === 1) month = "0" + month;
        return day + "." + month + "." + year;
    }

    isNullOrUndefined(prop){
        return (prop == null || prop == undefined);
    }

    isEmpty(value): boolean {
        return (value == null || value == undefined || value == "");
    }

    isEmptyArray(arr): boolean {
        return (arr == null || arr == undefined || arr.length == 0);
    }

    isEmptyObj(obj): boolean {
        let emptyFlag = true;
        if(obj != null && obj != undefined && obj != ""){
            for(let key in obj) {
                if(obj.hasOwnProperty(key)){
                    emptyFlag = false;
                    return emptyFlag;
                }
            }
        }
        return emptyFlag;
    }


}