import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGuida116Component } from './ng-guida-11-6.component';

describe('NgGuida116Component', () => {
  let component: NgGuida116Component;
  let fixture: ComponentFixture<NgGuida116Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgGuida116Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGuida116Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
