import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchText: string ;
  @Output()
  search = new EventEmitter();
  constructor() { }

  mySearch(evt){
    this.search.emit(evt.target.value);
  }

  ngOnInit() {
  }

}
