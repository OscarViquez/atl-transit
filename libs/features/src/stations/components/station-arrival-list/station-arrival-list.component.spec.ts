import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StationArrivalListComponent } from './station-arrival-list.component';

describe('StationArrivalListComponent', () => {
   let component: StationArrivalListComponent;
   let fixture: ComponentFixture<StationArrivalListComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [StationArrivalListComponent]
      }).compileComponents();

      fixture = TestBed.createComponent(StationArrivalListComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
