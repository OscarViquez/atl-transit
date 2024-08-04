import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationAmenitiesComponent } from './station-amenities.component';

describe('StationAmenitiesComponent', () => {
  let component: StationAmenitiesComponent;
  let fixture: ComponentFixture<StationAmenitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StationAmenitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StationAmenitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
