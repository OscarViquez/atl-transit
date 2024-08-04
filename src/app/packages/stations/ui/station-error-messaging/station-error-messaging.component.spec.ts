import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationErrorMessagingComponent } from './station-error-messaging.component';

describe('StationErrorMessagingComponent', () => {
  let component: StationErrorMessagingComponent;
  let fixture: ComponentFixture<StationErrorMessagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StationErrorMessagingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StationErrorMessagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
