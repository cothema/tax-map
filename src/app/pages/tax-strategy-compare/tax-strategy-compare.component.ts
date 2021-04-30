import { Component, OnInit, TemplateRef } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Tax } from '../../shared/model/tax';
import { TaxStrategyTax } from '../../shared/model/tax-strategy-tax';
import { TaxStrategyVersion } from '../../shared/model/tax-strategy-version';
import { TaxRepositoryService } from '../../shared/tax-model/tax-repository.service';
import { AncapExtreme1 } from '../../shared/tax-strategy/ideology/ancap/extreme/ancap-extreme-1';
import { CzOds2021 } from '../../shared/tax-strategy/region/cz/ods/cz-ods-2021';

@Component({
  selector: 'app-tax-strategy-compare',
  templateUrl: './tax-strategy-compare.component.html',
  styleUrls: ['./tax-strategy-compare.component.scss']
})
export class TaxStrategyCompareComponent implements OnInit {

  taxes?: Tax[];
  strategies: TaxStrategyVersion[] = [];
  faPlus = faPlus;
  faCheck = faCheck;

  constructor(
    private modalService: NgbModal,
    private taxRepositoryService: TaxRepositoryService,
    czOds2021: CzOds2021,
    ancapExtreme1: AncapExtreme1
  ) {
    this.strategies.push(
      czOds2021,
      ancapExtreme1
    );
  }

  ngOnInit(): void {
    this.taxes = this.taxRepositoryService.getAll();
  }

  onAdd(addModalContent: TemplateRef<any>): void {
    this.modalService.open(addModalContent, {size: 'lg'});
  }

  findTaxInStrategy(taxId: string, strategy: TaxStrategyVersion): TaxStrategyTax | undefined {
    return strategy.taxes.find(tax => tax.tax.id === taxId);
  }
}
