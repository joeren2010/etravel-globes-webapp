import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResvmgtComponent } from './resvmgt.component';

describe('ResvmgtComponent', () => {
  let component: ResvmgtComponent;
  let fixture: ComponentFixture<ResvmgtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResvmgtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResvmgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
