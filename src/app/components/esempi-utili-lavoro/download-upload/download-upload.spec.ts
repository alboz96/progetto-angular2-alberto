import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGuida117Component } from './download-upload.component';

describe('NgGuida117Component', () => {
  let component: NgGuida117Component;
  let fixture: ComponentFixture<NgGuida117Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgGuida117Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGuida117Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
