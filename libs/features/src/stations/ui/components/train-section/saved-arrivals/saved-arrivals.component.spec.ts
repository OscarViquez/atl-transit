import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SavedArrivalsComponent } from './saved-arrivals.component';

describe('SavedArrivalsComponent', () => {
   let component: SavedArrivalsComponent;
   let fixture: ComponentFixture<SavedArrivalsComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [SavedArrivalsComponent]
      }).compileComponents();

      fixture = TestBed.createComponent(SavedArrivalsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
