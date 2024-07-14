import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardInputFormComponent } from './card-input-form.component';

describe('CardInputFormComponent', () => {
   let component: CardInputFormComponent;
   let fixture: ComponentFixture<CardInputFormComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [CardInputFormComponent]
      }).compileComponents();

      fixture = TestBed.createComponent(CardInputFormComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
