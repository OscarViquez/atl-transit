import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StationArrivalItemComponent } from './station-arrival-item.component';

describe('StationArrivalItemComponent', () => {
   let component: StationArrivalItemComponent;
   let fixture: ComponentFixture<StationArrivalItemComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [StationArrivalItemComponent]
      }).compileComponents();

      fixture = TestBed.createComponent(StationArrivalItemComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
