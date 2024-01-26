import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StationParkingComponent } from './station-parking.component';

describe('StationParkingComponent', () => {
   let component: StationParkingComponent;
   let fixture: ComponentFixture<StationParkingComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [StationParkingComponent]
      }).compileComponents();

      fixture = TestBed.createComponent(StationParkingComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
