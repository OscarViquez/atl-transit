import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardModalSkeletonLoaderComponent } from './card-modal-skeleton-loader.component';

describe('CardModalSkeletonLoaderComponent', () => {
   let component: CardModalSkeletonLoaderComponent;
   let fixture: ComponentFixture<CardModalSkeletonLoaderComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [CardModalSkeletonLoaderComponent]
      }).compileComponents();

      fixture = TestBed.createComponent(CardModalSkeletonLoaderComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
