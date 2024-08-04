import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsPageComponent } from './maps-page.component';

describe('MapsPageComponent', () => {
  let component: MapsPageComponent;
  let fixture: ComponentFixture<MapsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapsPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MapsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
