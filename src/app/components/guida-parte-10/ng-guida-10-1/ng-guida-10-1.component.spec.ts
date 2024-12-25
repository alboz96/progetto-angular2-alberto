import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGuida101Component } from './ng-guida-10-1.component';

describe('NgGuida101Component', () => {
  let component: NgGuida101Component;
  let fixture: ComponentFixture<NgGuida101Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgGuida101Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGuida101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
