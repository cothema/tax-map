import { Component, OnInit } from '@angular/core';
import { Tax } from '../../shared/model/tax';
import { TaxStrategyVersion } from '../../shared/model/tax-strategy-version';
import { TaxRepositoryService } from '../../shared/tax-model/tax-repository.service';
import { CzOds2021 } from '../../shared/tax-strategy/region/cz/ods/cz-ods-2021';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  strategy?: TaxStrategyVersion;
  taxes?: Tax[];
  filterTags: string[] = [];

  constructor(
    private taxRepositoryService: TaxRepositoryService,
    czOds2021: CzOds2021
  ) {
    this.strategy = czOds2021;
  }

  ngOnInit(): void {
    this.loadTaxes();
  }

  onFilterByTags(tags: any): void {
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
      if (this.strategy !== undefined) {
        const strategyTax = this.strategy.taxes.find(strategyTaxEl => strategyTaxEl.tax.id === tax.id);

        if (strategyTax) {
          tax.trend = strategyTax.trend;
        }
      }
    });
  }

}
