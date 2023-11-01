import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrainStationCardComponent } from './train-station-card.component';

describe('TrainStationCardComponent', () => {
   let component: TrainStationCardComponent;
   let fixture: ComponentFixture<TrainStationCardComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [TrainStationCardComponent]
      }).compileComponents();

      fixture = TestBed.createComponent(TrainStationCardComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
