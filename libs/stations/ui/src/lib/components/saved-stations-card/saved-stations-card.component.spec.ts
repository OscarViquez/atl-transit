import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SavedStationsCardComponent } from './saved-stations-card.component';

describe('SavedStationsCardComponent', () => {
   let component: SavedStationsCardComponent;
   let fixture: ComponentFixture<SavedStationsCardComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [SavedStationsCardComponent]
      }).compileComponents();

      fixture = TestBed.createComponent(SavedStationsCardComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
