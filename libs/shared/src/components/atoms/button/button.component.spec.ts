import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemeButtonComponent } from './button.component';

describe('ButtonComponent', () => {
   let component: ThemeButtonComponent;
   let fixture: ComponentFixture<ThemeButtonComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [ThemeButtonComponent]
      }).compileComponents();

      fixture = TestBed.createComponent(ThemeButtonComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
