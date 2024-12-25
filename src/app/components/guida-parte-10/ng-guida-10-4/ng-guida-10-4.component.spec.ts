import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGuida104Component } from './ng-guida-10-4.component';

describe('NgGuida104Component', () => {
  let component: NgGuida104Component;
  let fixture: ComponentFixture<NgGuida104Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgGuida104Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGuida104Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
