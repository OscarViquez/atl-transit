import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrainSectionComponent } from './train-section.component';

describe('TrainSectionComponent', () => {
   let component: TrainSectionComponent;
   let fixture: ComponentFixture<TrainSectionComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [TrainSectionComponent]
      }).compileComponents();

      fixture = TestBed.createComponent(TrainSectionComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
