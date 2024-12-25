import { Component, OnInit, OnChanges, Input, SimpleChanges, SimpleChange } from '@angular/core';
import { MockService } from '../../../../app/services/mock-service/mock.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  itemList = [];
  originalItemList = [];
  @Input()
  myFilter: string;
  constructor(private mockService: MockService) { }
  
  getList(){
    this.mockService.getFileContent("sidebarList").subscribe((res) => {
      this.itemList = res;
      this.originalItemList = res;
    });
  }

  ngOnInit() {
    this.getList();

  }

  ngOnChanges(changes: SimpleChanges) {
    const myFilter: SimpleChange = changes.myFilter;
    // console.log('prev value: ', name.previousValue);
    // console.log('got name: ', name.currentValue);
    //SE FRA LE PROPRIETA' VARIATE E' PRESENTE myFilter
    if(myFilter != undefined){
      this.myFilter = myFilter.currentValue;
      console.log("in sidebar: " + this.myFilter)
      //FILTRO DI RICERCA CASE INSENSITIVE
      this.itemList =  this.originalItemList.filter ((cell) => { 
        // console.log(cell);
        return cell.name.match(new RegExp(this.myFilter, "i")) || 
               cell.desc.match(new RegExp(this.myFilter, "i"));
      });
    }

  }

}
