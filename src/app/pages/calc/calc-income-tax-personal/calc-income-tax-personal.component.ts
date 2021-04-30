import { Component, OnInit } from '@angular/core';
import { TaxStrategyVersion } from '../../../shared/model/tax-strategy-version';
import { CzOds2021 } from '../../../shared/tax-strategy/region/cz/ods/cz-ods-2021';

@Component({
  selector: 'app-calc-income-tax-personal',
  templateUrl: './calc-income-tax-personal.component.html',
  styleUrls: ['./calc-income-tax-personal.component.scss']
})
export class CalcIncomeTaxPersonalComponent implements OnInit {

  strategies: TaxStrategyVersion[] = [];

  constructor(
    private czOds2021: CzOds2021
  ) {
  }

  ngOnInit(): void {
    this.strategies.push(
      this.czOds2021
    );
  }

}
