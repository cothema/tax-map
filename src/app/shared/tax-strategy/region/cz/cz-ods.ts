import { TaxStrategyVersion } from '../../../../model/tax-strategy-version';
import { TaxStrategyTax } from '../../../../model/tax-strategy-tax';

export class CzOds2021 implements TaxStrategyVersion {
  title = 'taxStrategy.region.cz.ods.2021';
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
