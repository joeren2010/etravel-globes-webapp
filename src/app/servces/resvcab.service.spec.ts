import { TestBed } from '@angular/core/testing';

import { ResvcabService } from './resvcab.service';

describe('ResvcabService', () => {
  let service: ResvcabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResvcabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
