import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandPadsPage } from './land-pads.page';

describe('LandingPadsPage', () => {
  let component: LandPadsPage;
  let fixture: ComponentFixture<LandPadsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandPadsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandPadsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
