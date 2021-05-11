import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioItemListComponent } from './radio-item-list.component';

describe('RadioItemListComponent', () => {
  let component: RadioItemListComponent;
  let fixture: ComponentFixture<RadioItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
