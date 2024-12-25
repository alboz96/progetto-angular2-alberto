import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGuida103Component } from './ng-guida-10-3.component';

describe('NgGuida103Component', () => {
  let component: NgGuida103Component;
  let fixture: ComponentFixture<NgGuida103Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgGuida103Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGuida103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
