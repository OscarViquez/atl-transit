import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrainJourneyComponent } from './train-journey.component';

describe('TrainJourneyComponent', () => {
   let component: TrainJourneyComponent;
   let fixture: ComponentFixture<TrainJourneyComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [TrainJourneyComponent]
      }).compileComponents();

      fixture = TestBed.createComponent(TrainJourneyComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
