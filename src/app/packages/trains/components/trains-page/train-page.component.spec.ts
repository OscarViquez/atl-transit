import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrainPageComponent } from './train-page.component';

describe('TrainPageComponent', () => {
  let component: TrainPageComponent;
  let fixture: ComponentFixture<TrainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TrainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
