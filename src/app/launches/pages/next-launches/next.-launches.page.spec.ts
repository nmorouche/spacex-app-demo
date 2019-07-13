import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NextLaunchesPage } from './next-launches.page';

describe('NextPage', () => {
  let component: NextLaunchesPage;
  let fixture: ComponentFixture<NextLaunchesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextLaunchesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextLaunchesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
