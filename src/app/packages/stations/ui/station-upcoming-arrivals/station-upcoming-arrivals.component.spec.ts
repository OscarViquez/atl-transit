import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationUpcomingArrivalsComponent } from './station-upcoming-arrivals.component';

describe('StationUpcomingArrivalsComponent', () => {
  let component: StationUpcomingArrivalsComponent;
  let fixture: ComponentFixture<StationUpcomingArrivalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StationUpcomingArrivalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StationUpcomingArrivalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
