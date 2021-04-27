import { TestBed } from '@angular/core/testing';

import { TaxRepositoryService } from './tax-repository.service';

describe('TaxRepositoryService', () => {
  let service: TaxRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
