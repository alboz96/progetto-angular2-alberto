import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGuida81Component } from './ng-guida-8-1.component';

describe('NgGuida81Component', () => {
  let component: NgGuida81Component;
  let fixture: ComponentFixture<NgGuida81Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgGuida81Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGuida81Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
