import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGuida114Component } from './ng-guida-11-4.component';

describe('NgGuida114Component', () => {
  let component: NgGuida114Component;
  let fixture: ComponentFixture<NgGuida114Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgGuida114Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGuida114Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
