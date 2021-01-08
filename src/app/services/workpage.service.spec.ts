import { TestBed } from '@angular/core/testing';

import { WorkpageService } from './workpage.service';

describe('WorkpageService', () => {
  let service: WorkpageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkpageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
