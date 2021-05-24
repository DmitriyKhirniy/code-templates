import { TranslocoService } from '@ngneat/transloco';

import { LocalizationConfiguration } from '../../tokens/localization-configuration.token';

export abstract class LocalizationService {
  constructor(protected service: TranslocoService) {}

  abstract setActiveLang(lang?: string): void;

  getConfiguration(): LocalizationConfiguration {
    return {
      availableLanguages: this.service.getAvailableLangs() as string[],
      currentLang: this.service.getActiveLang(),
    };
  }
}
