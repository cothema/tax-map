import { TaxStrategy } from '../../../../model/tax-strategy';
import { TaxStrategyTax } from '../../../../model/tax-strategy-tax';

export class AncapExtreme1 implements TaxStrategy {
  taxes: TaxStrategyTax[] = [
    {
      taxId: '1',
      trend: 'no'
    },
    {
      taxId: '2',
      trend: 'no'
    },
    {
      taxId: '3',
      trend: 'no'
    },
  ];
}
