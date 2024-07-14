import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardTileBtnComponent } from './card-tile-btn.component';

describe('CardTileBtnComponent', () => {
   let component: CardTileBtnComponent;
   let fixture: ComponentFixture<CardTileBtnComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [CardTileBtnComponent]
      }).compileComponents();

      fixture = TestBed.createComponent(CardTileBtnComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
