import { Injectable } from '@angular/core';

import { LocalizationService } from './localization.service';

@Injectable()
export class LocalizationLocalService extends LocalizationService {
  setActiveLang(lang: string): void {
    this.service.setActiveLang(lang);
  }
}
