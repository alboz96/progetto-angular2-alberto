import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGuida112Component } from './ng-guida-11-2.component';

describe('NgGuida112Component', () => {
  let component: NgGuida112Component;
  let fixture: ComponentFixture<NgGuida112Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgGuida112Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGuida112Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
