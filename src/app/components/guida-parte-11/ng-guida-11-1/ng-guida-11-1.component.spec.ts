import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGuida111Component } from './ng-guida-11-1.component';

describe('NgGuida111Component', () => {
  let component: NgGuida111Component;
  let fixture: ComponentFixture<NgGuida111Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgGuida111Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGuida111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
