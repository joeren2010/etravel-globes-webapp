import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabcatothComponent } from './cabcatoth.component';

describe('CabcatothComponent', () => {
  let component: CabcatothComponent;
  let fixture: ComponentFixture<CabcatothComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabcatothComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabcatothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
