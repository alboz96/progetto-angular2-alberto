import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGuida71Component } from './ng-guida-7-1.component';

describe('NgGuida71Component', () => {
  let component: NgGuida71Component;
  let fixture: ComponentFixture<NgGuida71Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgGuida71Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGuida71Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
