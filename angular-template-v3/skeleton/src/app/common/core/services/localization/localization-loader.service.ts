import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HashMap, Translation, TranslocoLoader } from '@ngneat/transloco';
import { Observable } from 'rxjs';

import { DeployUrlToken } from '@core/tokens';

@Injectable()
export class TranslocoHttpLoader implements TranslocoLoader {
  constructor(
    private http: HttpClient,
    @Inject(DeployUrlToken) private readonly deployUrl: string,
  ) {}

  getTranslation(lang: string): Observable<HashMap> {
    return this.http.get<Translation>(`${this.deployUrl}assets/i18n/${lang}.json`);
  }
}
