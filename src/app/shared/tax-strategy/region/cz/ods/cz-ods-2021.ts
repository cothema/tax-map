import { TaxStrategyTax } from '../../../../model/tax-strategy-tax';
import { TaxStrategyVersion } from '../../../../model/tax-strategy-version';
import { CzOds } from '../cz-ods';

export class CzOds2021 implements TaxStrategyVersion {
  title = 'taxStrategy.region.cz.ods.2021.title';
  parent = new CzOds();
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
