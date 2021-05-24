import { Inject, Injectable, Optional } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

import { SingleSpaProps, SingleSpaPropsToken } from '@single-spa-local';
import { LocalizationConfiguration } from '../../tokens/localization-configuration.token';
import { LocalizationService } from './localization.service';

@Injectable()
export class LocalizationSingleSpaService extends LocalizationService {
  constructor(
    @Optional() @Inject(SingleSpaPropsToken) private props: SingleSpaProps,
    service: TranslocoService,
  ) {
    super(service);
  }

  setActiveLang(lang: string): void {
    this.service.setActiveLang(lang);
  }

  getConfiguration(): LocalizationConfiguration {
    return {
      availableLanguages: this.service.getAvailableLangs() as string[],
      currentLang: this.service.getActiveLang(),
    };
  }
}
