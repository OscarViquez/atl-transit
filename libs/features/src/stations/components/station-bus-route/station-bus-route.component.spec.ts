import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StationBusRouteComponent } from './station-bus-route.component';

describe('StationBusRouteComponent', () => {
   let component: StationBusRouteComponent;
   let fixture: ComponentFixture<StationBusRouteComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [StationBusRouteComponent]
      }).compileComponents();

      fixture = TestBed.createComponent(StationBusRouteComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
