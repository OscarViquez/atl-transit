import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SavedCardModalComponent } from './saved-card-modal.component';

describe('SavedCardModalComponent', () => {
   let component: SavedCardModalComponent;
   let fixture: ComponentFixture<SavedCardModalComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [SavedCardModalComponent]
      }).compileComponents();

      fixture = TestBed.createComponent(SavedCardModalComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
