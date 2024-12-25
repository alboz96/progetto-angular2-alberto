import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-download-upload',
  templateUrl: './download-upload.component.html',
  styleUrls: ['./download-upload.component.css']
})
export class DownloadUploadComponent implements OnInit {

  fileModel: any = null;
  base64data = null; //per dati codificati in base64
  decodedData = null; //per dati decodificati dal base64
  byteNumbers = null;
  fileName = null;
  constructor() { }

  ngOnInit() {

  }

  fileChange(evt) { //funzione di UPLOAD
    let files = evt.target.files; //array di file selezionati con l'input
    let file = files[0]; //il primo file, nel caso ne possa selezio
    if (files && file) {
        this.fileName = file.name;
        let reader = new FileReader();
        let binary = '';
        if (FileReader.prototype.readAsBinaryString === undefined) {
            FileReader.prototype.readAsBinaryString = function (fileData) { //adatto readAsBinaryString per IE 11
            let pt = this;
            reader.onload = function (e) { //callback chiamata quando inizia la lettura del file
              let  ia = null;
              let length = 0;
              if (e) {
                ia = new Uint8Array(e.target['result']); //cast dell'arrayBuffer (e.target['result']) in array di byte (UTF-8)
                length = ia.length; //prendo la lunghezza dell'array
              }
              for (let i = 0; i < length; i++) { //per ogni byte
                binary += String.fromCharCode(ia[i]); //trasformo il byte da binario a carattere (char) e lo concateno alla stringa binary
              }
            };

            reader.readAsArrayBuffer(fileData); //inizia la lettura del file
           };
        }

        reader.readAsBinaryString(file); //funzione che restituisce l'array di byte del file sotto forma di stringa

        reader.onloadend = () => { //alla fine del caricamento
          let binaryString;
          if ( binary === '') {
            binaryString= reader.result;
          } else {
            binaryString= binary.toString();
          }
         this.base64data = btoa(binaryString); //codifico la stringa in una in base64
         console.log(this.base64data); //stampo il risultato
      };
    }
  }


	detectIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
      // IE 10 or older => return version number
      return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
      // IE 11 => return version number
      var rv = ua.indexOf('rv:');
      return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
      // Edge (IE 12+) => return version number
      return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
  }

  fromBase64ToBlob() {
    let byteCharacters = atob(this.base64data); // atob = array of chars to binary
    this.byteNumbers = new Array(byteCharacters.length); // array di byte interpretabili come interi
    for (let i = 0; i < byteCharacters.length; i++) {
       this.byteNumbers[i] = byteCharacters.charCodeAt(i); //converto ogni intero nel corrispondente carattere unicode
    }
    let byteArray = new Uint8Array(this.byteNumbers); //array di unsigned integers
    let blob = null;
    let fileName = this.fileName;
    if(fileName.split('.').pop().toLowerCase() == "pdf" && !this.detectIE()){
      blob = new Blob([byteArray],  {type: 'application/pdf'}); //creo blob di tipo generico dall'array grezzo
    } else {
      blob = new Blob([byteArray], {type: "application/octet-stream"}); //creo blob di tipo generico dall'array grezzo
    }
    return blob;
  }

     //funzione di DOWNLOAD
  downloadFile() {
    let fileName = this.fileName;
    if(fileName.split('.').pop().toLowerCase() == "pdf" && !this.detectIE()) { // SE E' un pdf e non sono su IE
          let blob = this.fromBase64ToBlob();
          let blobURL = URL.createObjectURL(blob);
          let pdfWindow = window.open(blobURL, "_blank");
          pdfWindow.onload = function() { setTimeout(function(){pdfWindow.document.title = fileName;}, 2000);  };
          
    } else {
        if(fileName.split('.').pop().toLowerCase() == "pdf" && this.detectIE()){ // SE IE USO IL METODO COMPATIBILE (SENZA L'ATTRIBUTO a.download)
          let fileName = this.fileName;
          let blob = this.fromBase64ToBlob();
          // USO msSaveBlob se voglio solo salvare il file direttamente senza aprirlo
          window.navigator.msSaveOrOpenBlob(blob, fileName); //scarico il blob (su IE si può usare il blob)
        } else if (!this.detectIE()) { // IN CASO CONTRARIO USO L'ATTRIBUTO a.download
          // console.log(this.base64data);
          var a = window.document.createElement("a");
          a.href =  'data:application/octet-stream;base64,' + this.base64data;
          a.download = this.fileName;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        } else {
          let fileName = this.fileName;
          let blob = this.fromBase64ToBlob();
          // USO msSaveBlob se voglio solo salvare il file direttamente senza aprirlo
          window.navigator.msSaveBlob(blob, fileName); //scarico il blob (su IE si può usare il blob)
        }
  }
}


}
