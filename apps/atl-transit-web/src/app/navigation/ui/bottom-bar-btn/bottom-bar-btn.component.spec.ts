import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BottomBarBtnComponent } from './bottom-bar-btn.component';

describe('BottomBarBtnComponent', () => {
   let component: BottomBarBtnComponent;
   let fixture: ComponentFixture<BottomBarBtnComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [BottomBarBtnComponent]
      }).compileComponents();

      fixture = TestBed.createComponent(BottomBarBtnComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
