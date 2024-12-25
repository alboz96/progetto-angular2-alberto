import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGuida115Component } from './ng-guida-11-5.component';

describe('NgGuida115Component', () => {
  let component: NgGuida115Component;
  let fixture: ComponentFixture<NgGuida115Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgGuida115Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGuida115Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
