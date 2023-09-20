import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrainArrivalsMapComponent } from './train-arrivals-map.component';

describe('TrainArrivalsMapComponent', () => {
   let component: TrainArrivalsMapComponent;
   let fixture: ComponentFixture<TrainArrivalsMapComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [TrainArrivalsMapComponent]
      }).compileComponents();

      fixture = TestBed.createComponent(TrainArrivalsMapComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
