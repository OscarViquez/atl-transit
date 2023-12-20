import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrainArrivalPageComponent } from './train-arrival-page.component';

describe('TrainArrivalPageComponent', () => {
   let component: TrainArrivalPageComponent;
   let fixture: ComponentFixture<TrainArrivalPageComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [TrainArrivalPageComponent]
      }).compileComponents();

      fixture = TestBed.createComponent(TrainArrivalPageComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
