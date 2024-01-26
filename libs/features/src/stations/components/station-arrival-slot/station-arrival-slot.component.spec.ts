import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StationArrivalSlotComponent } from './station-arrival-slot.component';

describe('StationArrivalSlotComponent', () => {
   let component: StationArrivalSlotComponent;
   let fixture: ComponentFixture<StationArrivalSlotComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [StationArrivalSlotComponent]
      }).compileComponents();

      fixture = TestBed.createComponent(StationArrivalSlotComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
