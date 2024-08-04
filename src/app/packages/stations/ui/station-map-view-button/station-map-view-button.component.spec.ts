import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationMapViewButtonComponent } from './station-map-view-button.component';

describe('StationMapViewButtonComponent', () => {
  let component: StationMapViewButtonComponent;
  let fixture: ComponentFixture<StationMapViewButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StationMapViewButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StationMapViewButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
