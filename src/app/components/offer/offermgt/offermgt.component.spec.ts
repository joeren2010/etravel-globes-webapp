import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffermgtComponent } from './offermgt.component';

describe('OffermgtComponent', () => {
  let component: OffermgtComponent;
  let fixture: ComponentFixture<OffermgtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffermgtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffermgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
