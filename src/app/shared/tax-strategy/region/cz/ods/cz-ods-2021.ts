import { Injectable } from '@angular/core';
import { TaxStrategyTax } from '../../../../model/tax-strategy-tax';
import { TaxStrategyVersion } from '../../../../model/tax-strategy-version';
import { TaxStrategyTaxFactory } from '../../../../tax-model/tax-strategy-tax-factory';
import { CzOds } from '../cz-ods';

@Injectable({
  providedIn: 'root'
})
export class CzOds2021 implements TaxStrategyVersion {
  title = 'taxStrategy.region.cz.ods.2021.title';
  parent = new CzOds();
  taxes: TaxStrategyTax[] = [];

  constructor(
    factory: TaxStrategyTaxFactory
  ) {
    this.taxes.push(
      factory.createById('1', {
        trend: 'unknown'
      }),
      factory.createById('2', {
        trend: 'equal'
      })
    );
  }
}
