import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StationResourcesComponent } from './station-resources.component';

describe('StationResourcesComponent', () => {
   let component: StationResourcesComponent;
   let fixture: ComponentFixture<StationResourcesComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [StationResourcesComponent]
      }).compileComponents();

      fixture = TestBed.createComponent(StationResourcesComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
