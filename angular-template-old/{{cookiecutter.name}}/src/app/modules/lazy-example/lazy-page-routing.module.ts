import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LazyPageComponent } from './lazy-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LazyPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LazyPageRoutingModule {}
