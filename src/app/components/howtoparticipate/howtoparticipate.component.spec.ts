import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowtoparticipateComponent } from './howtoparticipate.component';

describe('HowtoparticipateComponent', () => {
  let component: HowtoparticipateComponent;
  let fixture: ComponentFixture<HowtoparticipateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowtoparticipateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowtoparticipateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
