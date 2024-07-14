import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SavedCardSummaryComponent } from './saved-card-summary.component';

describe('SavedCardSummaryComponent', () => {
   let component: SavedCardSummaryComponent;
   let fixture: ComponentFixture<SavedCardSummaryComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [SavedCardSummaryComponent]
      }).compileComponents();

      fixture = TestBed.createComponent(SavedCardSummaryComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
