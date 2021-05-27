import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from '@environment';
import { AppModeToken, AppModeType, LocalizationConfigurationToken } from '@core/tokens';

import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic([
  {
    provide: AppModeToken,
    useValue: AppModeType.Spa,
  },
  {
    provide: LocalizationConfigurationToken,
    useValue: {
      availableLanguages: ['en', 'es'],
      currentLang: 'en',
    },
  },
])
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
