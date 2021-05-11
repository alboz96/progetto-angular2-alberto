import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGuida119Component } from './ng-guida-11-9.component';

describe('NgGuida119Component', () => {
  let component: NgGuida119Component;
  let fixture: ComponentFixture<NgGuida119Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgGuida119Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGuida119Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
