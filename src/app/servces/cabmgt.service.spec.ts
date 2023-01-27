import { TestBed } from '@angular/core/testing';

import { CabmgtService } from './cabmgt.service';

describe('CabmgtService', () => {
  let service: CabmgtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CabmgtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
