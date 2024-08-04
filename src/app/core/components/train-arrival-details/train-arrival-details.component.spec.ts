import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainArrivalDetailsComponent } from './train-arrival-details.component';

describe('TrainArrivalDetailsComponent', () => {
  let component: TrainArrivalDetailsComponent;
  let fixture: ComponentFixture<TrainArrivalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainArrivalDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainArrivalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
