import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrainArrivalsComponent } from './train-arrivals.component';

describe('TrainArrivalsComponent', () => {
   let component: TrainArrivalsComponent;
   let fixture: ComponentFixture<TrainArrivalsComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [TrainArrivalsComponent]
      }).compileComponents();

      fixture = TestBed.createComponent(TrainArrivalsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
