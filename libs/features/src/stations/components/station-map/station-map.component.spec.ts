import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StationMapComponent } from './station-map.component';

describe('StationMapComponent', () => {
   let component: StationMapComponent;
   let fixture: ComponentFixture<StationMapComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [StationMapComponent]
      }).compileComponents();

      fixture = TestBed.createComponent(StationMapComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
