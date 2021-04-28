import { TaxStrategyTax } from '../../../../model/tax-strategy-tax';
import { TaxStrategyVersion } from '../../../../model/tax-strategy-version';
import { AncapExtreme } from '../ancap-extreme';

export class AncapExtreme1 implements TaxStrategyVersion {
  title = 'taxStrategy.ideology.ancap.extreme.1.title';
  parent = new AncapExtreme();
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
