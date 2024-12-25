import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2Guida64Component } from './ng2-guida-6-4.component';

describe('Ng2Guida64Component', () => {
  let component: Ng2Guida64Component;
  let fixture: ComponentFixture<Ng2Guida64Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2Guida64Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2Guida64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
