import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { AboutComponent } from './about.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: AboutComponent,
      },
    ]),
  ],
  declarations: [AboutComponent],
})
export class AboutModule {
}
