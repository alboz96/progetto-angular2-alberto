import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGuida102Component } from './ng-guida-10-2.component';

describe('NgGuida102Component', () => {
  let component: NgGuida102Component;
  let fixture: ComponentFixture<NgGuida102Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgGuida102Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGuida102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
