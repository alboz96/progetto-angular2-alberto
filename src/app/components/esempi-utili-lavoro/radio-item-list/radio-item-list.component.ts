import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-radio-item-list',
  templateUrl: './radio-item-list.component.html',
  styleUrls: ['./radio-item-list.component.css']
})
export class RadioItemListComponent implements OnInit {
  // @ViewChild('myForm')
  formModel: any = {}
  formGrande: any = {
    sottoForm: {
      radioItems: [
        {
          description: "Pippo",
          name: "pippo",
          value: "PI"
        },
        {
          description: "Pluto",
          name: "pluto",
          value: "PL"
        },
        {
          description: "Paperino",
          name: "paperino",
          value: "PA"
        }
      ]
    }
};
  items: any;
  constructor() {
   }

  ngOnInit() {
    this.items = this.formGrande.sottoForm.radioItems;

    this.formModel = {
      selectedRadio : this.items[1].value
    };
  }

  onChangeSelection(selectedItem) {
    console.log("hai selezionato: " + selectedItem.description);
  }
}
