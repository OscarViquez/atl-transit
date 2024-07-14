import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewCardModalComponent } from './view-card-modal.component';

describe('ViewCardModalComponent', () => {
   let component: ViewCardModalComponent;
   let fixture: ComponentFixture<ViewCardModalComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [ViewCardModalComponent]
      }).compileComponents();

      fixture = TestBed.createComponent(ViewCardModalComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
