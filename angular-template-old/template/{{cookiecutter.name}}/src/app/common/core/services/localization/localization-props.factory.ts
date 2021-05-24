import { Injector } from '@angular/core';

import { SingleSpaPropsToken } from '@single-spa-local';
import { LocalizationConfiguration } from '../../tokens/localization-configuration.token';

export function translationPropsFactory(injector: Injector): LocalizationConfiguration {
  const props = injector.get(SingleSpaPropsToken);

  return {
    currentLang: props.lang,
    availableLanguages: props.languages,
  } as LocalizationConfiguration;
}
