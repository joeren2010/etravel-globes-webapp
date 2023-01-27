import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabReservComponent } from './cab-reserv.component';

describe('CabReservComponent', () => {
  let component: CabReservComponent;
  let fixture: ComponentFixture<CabReservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabReservComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabReservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
