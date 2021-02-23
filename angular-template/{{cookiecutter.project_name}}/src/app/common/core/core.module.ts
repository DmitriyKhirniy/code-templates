import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { apiUrlFactory, ApiUrlToken } from './tokens/api-url.token';
import { deployUrlFactory, DeployUrlToken } from './tokens/deploy-url.token';

@NgModule({
  imports: [CommonModule, RouterModule, HttpClientModule],
  providers: [
    {
      provide: ApiUrlToken,
      useFactory: apiUrlFactory,
      deps: [Injector],
      multi: true,
    },
    {
      provide: DeployUrlToken,
      useFactory: deployUrlFactory,
      deps: [Injector],
      multi: true,
    },
  ],
})
export class CoreModule {}
