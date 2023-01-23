import { TestBed } from '@angular/core/testing';

import { BookcabService } from './bookcab.service';

describe('BookcabService', () => {
  let service: BookcabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookcabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
