import { Component, OnInit } from '@angular/core';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons/faArrowDown';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons/faArrowUp';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faQuestion } from '@fortawesome/free-solid-svg-icons/faQuestion';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { Tax } from '../../shared/model/tax';
import { TaxStrategy } from '../../shared/model/tax-strategy';
import { TaxRepositoryService } from '../../shared/tax-model/tax-repository.service';
import { CzOds2021 } from '../../shared/tax-strategy/region/cz/ods/cz-ods-2021';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  strategy: TaxStrategy = new CzOds2021();
  taxes?: Tax[];
  filterTags: string[] = [];
  faCheck = faCheck;
  faQuestion = faQuestion;
  faTimes = faTimes;
  faArrowUp = faArrowUp;
  faArrowRight = faArrowRight;
  faArrowDown = faArrowDown;

  constructor(
    private taxRepositoryService: TaxRepositoryService,
  ) {
  }

  ngOnInit(): void {
    this.loadTaxes();
  }

  onFilterByTags(tags: any): void {
    console.log(tags);
    this.filterTags = [];

    if (tags.personal) {
      this.filterTags.push('personal');
    }

    if (tags.corporate) {
      this.filterTags.push('corporate');
    }

    this.loadTaxes();
  }

  loadTaxes(): void {
    this.taxes = this.taxRepositoryService.getByTags(this.filterTags);
    this.taxes.forEach(tax => {
      const strategyTax = this.strategy.taxes.find(strategyTaxEl => strategyTaxEl.taxId === tax.id);

      if (strategyTax) {
        tax.trend = strategyTax.trend;
      }
    });
  }

}
