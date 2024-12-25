import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGuida1110Component } from './ng-guida-11-10.component';

describe('NgGuida1110Component', () => {
  let component: NgGuida1110Component;
  let fixture: ComponentFixture<NgGuida1110Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgGuida1110Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGuida1110Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
