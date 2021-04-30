import { Injectable } from '@angular/core';
import { TaxStrategyVersion } from '../model/tax-strategy-version';
import { AncapExtreme1 } from './ideology/ancap/extreme/ancap-extreme-1';
import { CzOds2021 } from './region/cz/ods/cz-ods-2021';

@Injectable({
  providedIn: 'root'
})
export class TaxStrategyRepositoryService {

  strategies: TaxStrategyVersion[] = [];

  constructor(
    public ancapExtreme1: AncapExtreme1,
    public czOds2021: CzOds2021
  ) {
    this.strategies.push(
      ancapExtreme1,
      czOds2021
    );
  }
}
