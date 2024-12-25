import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2Guida61Component } from './ng2-guida-6-1.component';

describe('Ng2Guida61Component', () => {
  let component: Ng2Guida61Component;
  let fixture: ComponentFixture<Ng2Guida61Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2Guida61Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2Guida61Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
