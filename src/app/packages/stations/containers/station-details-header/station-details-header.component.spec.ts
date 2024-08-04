import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationDetailsHeaderComponent } from './station-details-header.component';

describe('StationDetailsHeaderComponent', () => {
  let component: StationDetailsHeaderComponent;
  let fixture: ComponentFixture<StationDetailsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StationDetailsHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StationDetailsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
