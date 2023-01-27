import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabmgtComponent } from './cabmgt.component';

describe('CabmgtComponent', () => {
  let component: CabmgtComponent;
  let fixture: ComponentFixture<CabmgtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabmgtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabmgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
