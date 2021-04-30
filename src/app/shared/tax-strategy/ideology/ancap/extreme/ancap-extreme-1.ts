import { Injectable } from '@angular/core';
import { TaxStrategyTax } from '../../../../model/tax-strategy-tax';
import { TaxStrategyVersion } from '../../../../model/tax-strategy-version';
import { TaxStrategyTaxFactory } from '../../../../tax-model/tax-strategy-tax-factory';
import { AncapExtreme } from '../ancap-extreme';

@Injectable({
  providedIn: 'root'
})
export class AncapExtreme1 implements TaxStrategyVersion {
  title = 'taxStrategy.ideology.ancap.extreme.1.title';
  parent = new AncapExtreme();
  taxes: TaxStrategyTax[] = [];
  cases = [
    {
      caseId: '1', // Personal Income Tax,
      steps: [
        {
          tax: this.taxes.find(tax => tax.tax.id === '1')
        }
      ]
    }
  ];

  constructor(
    factory: TaxStrategyTaxFactory
  ) {
    this.taxes.push(
      factory.createById('1', {
        trend: 'no'
      }),
      factory.createById('2', {
        trend: 'no'
      }),
      factory.createById('3', {
        trend: 'no'
      })
    );
  }
}
