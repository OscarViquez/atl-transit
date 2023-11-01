import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RailArrivalCardComponent } from './rail-arrival-card.component';

describe('RailArrivalCardComponent', () => {
   let component: RailArrivalCardComponent;
   let fixture: ComponentFixture<RailArrivalCardComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [RailArrivalCardComponent]
      }).compileComponents();

      fixture = TestBed.createComponent(RailArrivalCardComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
