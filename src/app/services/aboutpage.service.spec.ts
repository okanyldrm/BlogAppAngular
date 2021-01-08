import { TestBed } from '@angular/core/testing';

import { AboutpageService } from './aboutpage.service';

describe('AboutpageService', () => {
  let service: AboutpageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutpageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
