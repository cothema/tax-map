import { Tax } from './tax';

export interface TaxStrategyTax {
  tax: Tax;
  trend: 'higher' | 'equal' | 'yes' | 'unknown' | 'lower' | 'no';
}
