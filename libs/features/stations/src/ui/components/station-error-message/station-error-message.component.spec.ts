import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StationErrorMessageComponent } from './station-error-message.component';

describe('StationErrorMessageComponent', () => {
   let component: StationErrorMessageComponent;
   let fixture: ComponentFixture<StationErrorMessageComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [StationErrorMessageComponent]
      }).compileComponents();

      fixture = TestBed.createComponent(StationErrorMessageComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
