import { TestBed } from '@angular/core/testing';

import { BackendpageService } from './backendpage.service';

describe('BackendpageService', () => {
  let service: BackendpageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendpageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
