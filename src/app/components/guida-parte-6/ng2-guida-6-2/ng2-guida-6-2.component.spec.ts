import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2Guida62Component } from './ng2-guida-6-2.component';

describe('Ng2Guida62Component', () => {
  let component: Ng2Guida62Component;
  let fixture: ComponentFixture<Ng2Guida62Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2Guida62Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2Guida62Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
