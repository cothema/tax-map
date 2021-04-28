import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { TaxDetailComponent } from './tax-detail.component';

@NgModule({
  declarations: [
    TaxDetailComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: ':id',
        component: TaxDetailComponent,
      },
    ]),
  ]
})
export class TaxDetailModule {
}
