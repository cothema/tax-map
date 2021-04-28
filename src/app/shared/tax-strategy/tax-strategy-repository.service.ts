import { Injectable } from '@angular/core';
import { AncapExtreme1 } from './ideology/ancap/extreme/ancap-extreme-1';
import { CzOds2021 } from './region/cz/ods/cz-ods-2021';

@Injectable({
  providedIn: 'root'
})
export class TaxStrategyRepositoryService {

  strategies = {
    ideology: {
      ancap: {
        extreme: {
          v1: AncapExtreme1
        }
      }
    },
    region: {
      cz: {
        reality: undefined,
        ods: {
          v2021: CzOds2021
        }
      }
    }
  };

  constructor() {
  }
}
