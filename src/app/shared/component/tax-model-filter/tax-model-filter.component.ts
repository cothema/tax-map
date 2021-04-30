import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons/faBalanceScale';

@Component({
  selector: 'app-tax-model-filter',
  templateUrl: './tax-model-filter.component.html',
  styleUrls: ['./tax-model-filter.component.scss']
})
export class TaxModelFilterComponent implements OnInit {

  @Output() filterTagsChanged = new EventEmitter<{
    personal?: boolean,
    corporate?: boolean
  }>();

  filterTags = {
    personal: true,
    corporate: true
  };
  faBalanceScale = faBalanceScale;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  onFilterChanged(): void {
    this.filterTagsChanged.emit(this.filterTags);
  }

  onCompare(): void {
    this.router.navigate(['/tax-strategy-compare']);
  }
}
