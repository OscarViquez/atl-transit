import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StationArrivalCardComponent } from './station-arrival-card.component';

describe('StationArrivalCardComponent', () => {
   let component: StationArrivalCardComponent;
   let fixture: ComponentFixture<StationArrivalCardComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [StationArrivalCardComponent]
      }).compileComponents();

      fixture = TestBed.createComponent(StationArrivalCardComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
