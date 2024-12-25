import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2Guida63Component } from './ng2-guida-6-3.component';

describe('Ng2Guida63Component', () => {
  let component: Ng2Guida63Component;
  let fixture: ComponentFixture<Ng2Guida63Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2Guida63Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2Guida63Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
