import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGuida118Component } from './ng-guida-11-8.component';

describe('NgGuida118Component', () => {
  let component: NgGuida118Component;
  let fixture: ComponentFixture<NgGuida118Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgGuida118Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGuida118Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
