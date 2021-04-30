import { Injectable } from '@angular/core';
import { TaxStrategyTax } from '../model/tax-strategy-tax';
import { TaxRepositoryService } from './tax-repository.service';

@Injectable({
  providedIn: 'root'
})
export class TaxStrategyTaxFactory {
  constructor(
    private taxRepositoryService: TaxRepositoryService
  ) {
  }

  createById(taxId: string, taxStrategyTax: Partial<TaxStrategyTax>): TaxStrategyTax {
    taxStrategyTax.tax = this.taxRepositoryService.getById(taxId);

    return taxStrategyTax as TaxStrategyTax;
  }
}
