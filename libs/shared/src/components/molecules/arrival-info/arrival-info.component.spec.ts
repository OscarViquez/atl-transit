import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArrivalInfoComponent } from './arrival-info.component';

describe('ArrivalInfoComponent', () => {
   let component: ArrivalInfoComponent;
   let fixture: ComponentFixture<ArrivalInfoComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [ArrivalInfoComponent]
      }).compileComponents();

      fixture = TestBed.createComponent(ArrivalInfoComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
