import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcfareComponent } from './calcfare.component';

describe('CalcfareComponent', () => {
  let component: CalcfareComponent;
  let fixture: ComponentFixture<CalcfareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcfareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcfareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
