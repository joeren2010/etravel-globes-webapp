import { TestBed } from '@angular/core/testing';

import { ResvmgtService } from './resvmgt.service';

describe('ResvmgtService', () => {
  let service: ResvmgtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResvmgtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
