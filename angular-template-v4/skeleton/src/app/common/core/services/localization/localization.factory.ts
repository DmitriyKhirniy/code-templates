import { InjectFlags, Injector } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

import { SingleSpaPropsToken } from '@single-spa-local';
import { AppModeToken, AppModeType } from '../../tokens/app-mode.token';
import { LocalizationService } from './localization.service';
import { LocalizationSingleSpaService } from './localization-single-spa.service';
import { LocalizationLocalService } from './localization-local.service';

export function LocalizationFactory(injector: Injector): LocalizationService {
  const mode: AppModeType = injector.get(AppModeToken, AppModeType.Spa, InjectFlags.Optional);

  if (mode === AppModeType.MicroFrontend) {
    return new LocalizationSingleSpaService(
      injector.get(SingleSpaPropsToken, null, InjectFlags.Optional),
      injector.get(TranslocoService),
    );
  }

  return new LocalizationLocalService(injector.get(TranslocoService));
}
