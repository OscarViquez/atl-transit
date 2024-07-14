import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardsPageComponent } from './cards-page.component';

describe('CardsPageComponent', () => {
   let component: CardsPageComponent;
   let fixture: ComponentFixture<CardsPageComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [CardsPageComponent]
      }).compileComponents();

      fixture = TestBed.createComponent(CardsPageComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
