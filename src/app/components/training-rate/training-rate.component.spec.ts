import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingRateComponent } from './training-rate.component';

describe('TrainingRateComponent', () => {
  let component: TrainingRateComponent;
  let fixture: ComponentFixture<TrainingRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
