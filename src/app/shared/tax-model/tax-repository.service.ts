import { Injectable } from '@angular/core';
import { Tax } from '../model/tax';

@Injectable({
  providedIn: 'root'
})
export class TaxRepositoryService {

  constructor() {
  }

  getById(id: string): Tax | undefined {
    return this.findByIdRecursively(this.getAll(), id);
  }

  getByTags(tags: string[]): Tax[] {
    if (!tags.length) {
      return this.getAll();
    }

    return this.getAll().filter(tax => tax.tags && tax.tags.filter(taxTag => tags.includes(taxTag)).length === tags.length);
  }

  getAll(): Tax[] {
    return [
      {
        id: '1',
        title: 'tax.income.title',
        sub: [
          {
            id: '4',
            title: 'tax.incomePersonal.title',
            tags: ['direct', 'personal']
          },
          {
            id: '5',
            title: 'tax.incomeCorporate.title',
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
        tags: ['direct', 'corporate', 'personal', 'property']
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

  private findByIdRecursively(taxes: Tax[], id: string, i = 0): Tax | undefined {
    for (const tax of taxes) {
      if (tax.id === id) {
        return tax;
      }

      if (tax.sub && tax.sub.length) {
        const subOut = this.findByIdRecursively(tax.sub, id, ++i);
        if (subOut) {
          subOut.parent = tax;
          return subOut;
        }
      }
    }

    return undefined;
  }
}
