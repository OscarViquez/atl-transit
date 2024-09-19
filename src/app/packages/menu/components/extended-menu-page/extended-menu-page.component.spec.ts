import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedMenuPageComponent } from './extended-menu-page.component';

describe('ExtendedMenuPageComponent', () => {
  let component: ExtendedMenuPageComponent;
  let fixture: ComponentFixture<ExtendedMenuPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtendedMenuPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtendedMenuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
