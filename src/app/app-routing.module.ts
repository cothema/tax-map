import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.module').then(m => m.AboutModule),
  },
  {
    path: 'tax-detail',
    loadChildren: () =>
      import('./pages/tax-detail/tax-detail.module').then(m => m.TaxDetailModule),
  },
  {
    path: 'tax-strategy-compare',
    loadChildren: () =>
      import('./pages/tax-strategy-compare/tax-strategy-compare.module').then(m => m.TaxStrategyCompareModule),
  },
  {
    path: 'calculators',
    children: [
      {
        path: 'tax-income-personal',
        loadChildren: () =>
          import('./pages/calc/calc-income-tax-personal/calc-income-tax-personal.module').then(m => m.CalcIncomeTaxPersonalModule),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
