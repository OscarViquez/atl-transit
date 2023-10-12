import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadingSkeletonComponent } from './loading-skeleton.component';

describe('LoadingSkeletonComponent', () => {
   let component: LoadingSkeletonComponent;
   let fixture: ComponentFixture<LoadingSkeletonComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [LoadingSkeletonComponent]
      }).compileComponents();

      fixture = TestBed.createComponent(LoadingSkeletonComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
