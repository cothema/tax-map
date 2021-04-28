import { Injectable } from '@angular/core';
import { Tax } from '../model/tax';

@Injectable({
  providedIn: 'root'
})
export class TaxRepositoryService {

  constructor() {
  }

  getById(id: string): Tax | undefined {
    console.log(id);
    return this.getAll().find(tax => tax.id === id);
  }

  getAll(): Tax[] {
    return [
      {
        id: '1',
        title: 'tax.income.title',
        sub: [
          {
            id: '4',
            title: 'tax.incomePerson.title',
            tags: ['direct', 'person']
          },
          {
            id: '5',
            title: 'tax.incomeCompany.title',
            tags: ['direct', 'corporate']
          }
        ],
        tags: ['direct']
      },
      {
        id: '2',
        title: 'tax.realEstate.title',
        links: [
          {
            title: 'Wikipedia',
            href: 'https://cs.wikipedia.org/wiki/Da%C5%88_z_nemovit%C3%BDch_v%C4%9Bc%C3%AD',
            lang: 'cs'
          }
        ],
        tags: ['direct', 'corporate', 'person', 'property']
      },
      {
        id: '3',
        title: 'tax.valueAdded.title',
        links: [
          {
            title: 'Wikipedia',
            href: 'https://cs.wikipedia.org/wiki/Da%C5%88_z_p%C5%99idan%C3%A9_hodnoty',
            lang: 'cs'
          }
        ],
        tags: ['indirect']
      }
    ];
  }
}
