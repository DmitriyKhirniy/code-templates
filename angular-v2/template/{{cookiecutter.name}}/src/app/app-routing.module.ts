import { Injector, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { baseHrefFactory } from '@core/helpers';
import { ApplicationRoutes } from './app.routes';

@NgModule({
  imports: [RouterModule.forRoot(ApplicationRoutes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useFactory: baseHrefFactory, deps: [Injector] }],
})
export class AppRoutingModule {}
