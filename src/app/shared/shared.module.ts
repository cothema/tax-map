import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { TaxModelFilterComponent } from './component/tax-model-filter/tax-model-filter.component';
import { TaxTrendComponent } from './component/tax-trend/tax-trend.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule.forChild(),
    FontAwesomeModule,
    NgbTooltipModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    FontAwesomeModule,
    NgbTooltipModule,
    TaxModelFilterComponent,
    TaxTrendComponent
  ],
  entryComponents: [],
  providers: [],
  declarations: [
    TaxModelFilterComponent,
    TaxTrendComponent
  ],
})
export class SharedModule {
}
