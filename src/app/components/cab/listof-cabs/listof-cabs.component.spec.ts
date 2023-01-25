import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofCabsComponent } from './listof-cabs.component';

describe('ListofCabsComponent', () => {
  let component: ListofCabsComponent;
  let fixture: ComponentFixture<ListofCabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofCabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofCabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
