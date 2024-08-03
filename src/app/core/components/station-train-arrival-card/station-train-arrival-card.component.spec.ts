import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationTrainArrivalCardComponent } from './station-train-arrival-card.component';

describe('StationTrainArrivalCardComponent', () => {
  let component: StationTrainArrivalCardComponent;
  let fixture: ComponentFixture<StationTrainArrivalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StationTrainArrivalCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StationTrainArrivalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
