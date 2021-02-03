import { TestBed } from '@angular/core/testing';

import { ChartModelService } from './chart-model.service';

describe('ChartModelService', () => {
  let service: ChartModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
