import { Injectable } from '@angular/core';
import { Tax } from '../model/tax';

@Injectable({
  providedIn: 'root'
})
export class TaxRepositoryService {

  constructor() {
  }

  getAll(): Tax[] {
    return [
      {
        title: 'tax.income.title'
      },
      {
        title: 'tax.realEstate.title',
        links: [
          {
            title: 'Wikipedia',
            href: 'https://cs.wikipedia.org/wiki/Da%C5%88_z_nemovit%C3%BDch_v%C4%9Bc%C3%AD'
          }
        ]
      }
    ];
  }
}
