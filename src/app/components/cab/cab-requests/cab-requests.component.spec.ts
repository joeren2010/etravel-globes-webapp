import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabRequestsComponent } from './cab-requests.component';

describe('CabRequestsComponent', () => {
  let component: CabRequestsComponent;
  let fixture: ComponentFixture<CabRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
