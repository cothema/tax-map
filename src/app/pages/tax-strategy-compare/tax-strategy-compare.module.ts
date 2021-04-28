import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { TaxStrategyCompareComponent } from './tax-strategy-compare.component';

@NgModule({
  declarations: [
    TaxStrategyCompareComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: TaxStrategyCompareComponent,
      },
    ]),
  ]
})
export class TaxStrategyCompareModule {
}
