import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigationLaunchButtonComponent } from './navigation-launch-button.component';

describe('NavigationLaunchButtonComponent', () => {
   let component: NavigationLaunchButtonComponent;
   let fixture: ComponentFixture<NavigationLaunchButtonComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [NavigationLaunchButtonComponent]
      }).compileComponents();

      fixture = TestBed.createComponent(NavigationLaunchButtonComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
