import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResourceSectionComponent } from './resource-section.component';

describe('ResourceSectionComponent', () => {
   let component: ResourceSectionComponent;
   let fixture: ComponentFixture<ResourceSectionComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [ResourceSectionComponent]
      }).compileComponents();

      fixture = TestBed.createComponent(ResourceSectionComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
