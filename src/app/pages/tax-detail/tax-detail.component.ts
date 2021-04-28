import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tax } from '../../shared/model/tax';
import { TaxRepositoryService } from '../../shared/tax-model/tax-repository.service';

@Component({
  selector: 'app-tax-detail',
  templateUrl: './tax-detail.component.html',
  styleUrls: ['./tax-detail.component.scss']
})
export class TaxDetailComponent implements OnInit {

  tax?: Tax;

  constructor(
    private taxRepositoryService: TaxRepositoryService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const taxId = this.route.snapshot.paramMap.get('id');

    if (taxId) {
      this.tax = this.taxRepositoryService.getById(taxId);
    }
  }

}
