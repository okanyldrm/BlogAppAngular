import { TestBed } from '@angular/core/testing';

import { DatabasepageService } from './databasepage.service';

describe('DatabasepageService', () => {
  let service: DatabasepageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabasepageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
