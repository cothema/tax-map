export interface TaxStrategyTax {
  taxId: string;
  trend: 'higher' | 'equal' | 'yes' | 'unknown' | 'lower' | 'no';
}
