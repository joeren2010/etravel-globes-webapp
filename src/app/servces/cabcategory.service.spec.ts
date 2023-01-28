import { TestBed } from '@angular/core/testing';

import { CabcategoryService } from './cabcategory.service';

describe('CabcategoryService', () => {
  let service: CabcategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CabcategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
