import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StationCardComponent } from './station-card.component';

describe('StationCardComponent', () => {
   let component: StationCardComponent;
   let fixture: ComponentFixture<StationCardComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [StationCardComponent]
      }).compileComponents();

      fixture = TestBed.createComponent(StationCardComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
