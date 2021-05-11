import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGuida91Component } from './ng-guida-9-1.component';

describe('NgGuida91Component', () => {
  let component: NgGuida91Component;
  let fixture: ComponentFixture<NgGuida91Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgGuida91Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGuida91Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
