import { TestBed } from '@angular/core/testing';

import { ResvService } from './resv.service';

describe('ResvService', () => {
  let service: ResvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
