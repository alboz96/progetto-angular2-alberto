import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGuida113Component } from './ng-guida-11-3.component';

describe('NgGuida113Component', () => {
  let component: NgGuida113Component;
  let fixture: ComponentFixture<NgGuida113Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgGuida113Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGuida113Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
