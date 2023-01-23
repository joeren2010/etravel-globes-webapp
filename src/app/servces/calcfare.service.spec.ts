import { TestBed } from '@angular/core/testing';

import { CalcfareService } from './calcfare.service';

describe('CalcfareService', () => {
  let service: CalcfareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcfareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
