import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchEmptyViewComponent } from './search-empty-view.component';

describe('SearchEmptyViewComponent', () => {
   let component: SearchEmptyViewComponent;
   let fixture: ComponentFixture<SearchEmptyViewComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [SearchEmptyViewComponent]
      }).compileComponents();

      fixture = TestBed.createComponent(SearchEmptyViewComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
