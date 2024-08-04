import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBalanceModalComponent } from './card-balance-modal.component';

describe('CardBalanceModalComponent', () => {
  let component: CardBalanceModalComponent;
  let fixture: ComponentFixture<CardBalanceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardBalanceModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardBalanceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
