import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchPadsPage } from './launch-pads.page';

describe('LaunchPadsPage', () => {
  let component: LaunchPadsPage;
  let fixture: ComponentFixture<LaunchPadsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchPadsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchPadsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
