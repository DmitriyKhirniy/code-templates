import { Injectable } from '@angular/core';

import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { WeatherItem, WeatherResponse } from './lazy-page.interfaces';
import { Query } from './lazy-page.constants';

@Injectable()
export class LazyPageService {
  constructor(private apollo: Apollo) {}

  getData(): Observable<WeatherItem> {
    return this.apollo
      .watchQuery<WeatherResponse>({ query: Query })
      .valueChanges
      .pipe(
        map((result) => result.data.weathercurrent),
      );
  }
}
