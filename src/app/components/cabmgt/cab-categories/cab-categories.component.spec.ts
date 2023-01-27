import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabCategoriesComponent } from './cab-categories.component';

describe('CabCategoriesComponent', () => {
  let component: CabCategoriesComponent;
  let fixture: ComponentFixture<CabCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
