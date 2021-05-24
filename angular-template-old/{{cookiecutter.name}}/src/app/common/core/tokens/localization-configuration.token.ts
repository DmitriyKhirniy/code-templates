import { InjectionToken } from '@angular/core';

export interface LocalizationConfiguration {
  currentLang: string;
  availableLanguages: string[];
}

export const LocalizationConfigurationToken: InjectionToken<LocalizationConfiguration> = new
InjectionToken<LocalizationConfiguration>('LocalizationConfigurationToken');
