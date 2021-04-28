import { TaxStrategyTax } from './tax-strategy-tax';

export interface TaxStrategy {
  title?: string;
  taxes: TaxStrategyTax[];
}
