import { TestBed } from '@angular/core/testing';

import { FrontendpageService } from './frontendpage.service';

describe('FrontendpageService', () => {
  let service: FrontendpageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrontendpageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
