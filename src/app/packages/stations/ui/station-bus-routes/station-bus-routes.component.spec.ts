import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationBusRoutesComponent } from './station-bus-routes.component';

describe('StationBusRoutesComponent', () => {
  let component: StationBusRoutesComponent;
  let fixture: ComponentFixture<StationBusRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StationBusRoutesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StationBusRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
