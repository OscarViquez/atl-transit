import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardFeedbackComponent } from './card-feedback.component';

describe('CardDetailsComponent', () => {
   let component: CardFeedbackComponent;
   let fixture: ComponentFixture<CardFeedbackComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [CardFeedbackComponent]
      }).compileComponents();

      fixture = TestBed.createComponent(CardFeedbackComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
