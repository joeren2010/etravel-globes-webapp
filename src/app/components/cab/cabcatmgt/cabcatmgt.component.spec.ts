import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabcatmgtComponent } from './cabcatmgt.component';

describe('CabcatmgtComponent', () => {
  let component: CabcatmgtComponent;
  let fixture: ComponentFixture<CabcatmgtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabcatmgtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabcatmgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
