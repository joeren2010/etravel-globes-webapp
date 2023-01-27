import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResvCabsComponent } from './resv-cabs.component';

describe('ResvCabsComponent', () => {
  let component: ResvCabsComponent;
  let fixture: ComponentFixture<ResvCabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResvCabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResvCabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
