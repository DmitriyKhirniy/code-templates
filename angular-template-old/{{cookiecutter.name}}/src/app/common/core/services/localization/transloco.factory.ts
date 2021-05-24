import { InjectFlags, Injector } from '@angular/core';
import { translocoConfig } from '@ngneat/transloco';
import { TranslocoConfig } from '@ngneat/transloco/lib/transloco.config';

import { LocalizationConfiguration, LocalizationConfigurationToken } from '@core/tokens';
import { environment } from '@environment';

export function TranslocoFactory(injector: Injector): TranslocoConfig {
  const configuration = injector.get<Partial<LocalizationConfiguration>>(
    LocalizationConfigurationToken,
    {},
    InjectFlags.Optional,
  );

  return translocoConfig({
    availableLangs: configuration.availableLanguages || ['en', 'es'],
    defaultLang: configuration.currentLang || 'en',
    // Remove this option if your application doesn't support changing language in runtime.
    reRenderOnLangChange: true,
    prodMode: environment.production,
    fallbackLang: 'en',
  });
}
