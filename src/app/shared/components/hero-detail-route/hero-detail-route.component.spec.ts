import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailRouteComponent } from './hero-detail-route.component';

describe('HeroDetailRouteComponent', () => {
  let component: HeroDetailRouteComponent;
  let fixture: ComponentFixture<HeroDetailRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDetailRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
