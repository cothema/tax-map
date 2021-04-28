import { TestBed } from '@angular/core/testing';

import { TaxStrategyRepositoryService } from './tax-strategy-repository.service';

describe('TaxStrategyRepositoryService', () => {
  let service: TaxStrategyRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxStrategyRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
