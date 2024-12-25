import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGuida72Component } from './ng-guida-7-2.component';

describe('NgGuida72Component', () => {
  let component: NgGuida72Component;
  let fixture: ComponentFixture<NgGuida72Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgGuida72Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGuida72Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
