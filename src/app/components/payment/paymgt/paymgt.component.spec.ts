import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymgtComponent } from './paymgt.component';

describe('PaymgtComponent', () => {
  let component: PaymgtComponent;
  let fixture: ComponentFixture<PaymgtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymgtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
