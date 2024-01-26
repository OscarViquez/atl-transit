import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StationAmenityComponent } from './station-amenity.component';

describe('StationAmenityComponent', () => {
   let component: StationAmenityComponent;
   let fixture: ComponentFixture<StationAmenityComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [StationAmenityComponent]
      }).compileComponents();

      fixture = TestBed.createComponent(StationAmenityComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
