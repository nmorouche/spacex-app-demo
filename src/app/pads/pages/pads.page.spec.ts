import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadsPage } from './pads.page';

describe('PadsPage', () => {
  let component: PadsPage;
  let fixture: ComponentFixture<PadsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
