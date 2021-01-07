import { TestBed } from '@angular/core/testing';

import { DevopspageService } from './devopspage.service';

describe('DevopspageService', () => {
  let service: DevopspageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevopspageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
