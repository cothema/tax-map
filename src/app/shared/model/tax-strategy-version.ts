import { TaxStrategyGroup } from './tax-strategy-group';
import { TaxStrategyTax } from './tax-strategy-tax';

export interface TaxStrategyVersion {
  title: string;
  taxes: TaxStrategyTax[];
  parent: TaxStrategyGroup;
}
