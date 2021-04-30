import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { CalcIncomeTaxPersonalComponent } from './calc-income-tax-personal.component';


@NgModule({
  declarations: [
    CalcIncomeTaxPersonalComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: CalcIncomeTaxPersonalComponent,
      },
    ]),
  ]
})
export class CalcIncomeTaxPersonalModule { }
