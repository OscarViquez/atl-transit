import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StationBusRouteSlotComponent } from './station-bus-route-slot.component';

describe('StationBusRouteSlotComponent', () => {
   let component: StationBusRouteSlotComponent;
   let fixture: ComponentFixture<StationBusRouteSlotComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [StationBusRouteSlotComponent]
      }).compileComponents();

      fixture = TestBed.createComponent(StationBusRouteSlotComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
