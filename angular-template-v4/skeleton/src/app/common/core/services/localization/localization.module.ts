import { Injector, NgModule } from '@angular/core';

import { TRANSLOCO_CONFIG, TRANSLOCO_LOADER, TranslocoModule } from '@ngneat/transloco';

import { LocalizationService } from './localization.service';
import { LocalizationFactory } from './localization.factory';
import { TranslocoFactory } from './transloco.factory';
import { TranslocoHttpLoader } from './localization-loader.service';

@NgModule({
  imports: [TranslocoModule],
  exports: [TranslocoModule],
  providers: [
    {
      provide: LocalizationService,
      useFactory: LocalizationFactory,
      deps: [Injector],
    },
    {
      provide: TRANSLOCO_CONFIG,
      useFactory: TranslocoFactory,
      deps: [Injector],
    },
    { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader },
  ],
})
export class LocalizationModule {}
