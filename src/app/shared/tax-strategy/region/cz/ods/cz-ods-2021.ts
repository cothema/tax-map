import { TaxStrategy } from '../../../../model/tax-strategy';
import { TaxStrategyTax } from '../../../../model/tax-strategy-tax';

export class CzOds2021 implements TaxStrategy {
  taxes: TaxStrategyTax[] = [
    {
      taxId: '1',
      trend: 'unknown'
    },
    {
      taxId: '2',
      trend: 'equal'
    },
  ];
}
