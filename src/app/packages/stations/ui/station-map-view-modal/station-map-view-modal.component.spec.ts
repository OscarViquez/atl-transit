import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationMapViewModalComponent } from './station-map-view-modal.component';

describe('StationMapViewModalComponent', () => {
  let component: StationMapViewModalComponent;
  let fixture: ComponentFixture<StationMapViewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StationMapViewModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StationMapViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
