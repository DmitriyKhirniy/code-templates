import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Observable } from 'rxjs';

import { WeatherItem } from './lazy-page.interfaces';
import { LazyPageService } from './lazy-page.service';
import { QueryExample } from './lazy-page.constants';

@Component({
  selector: 'app-lazy-page',
  templateUrl: './lazy-page.component.html',
  styleUrls: ['./lazy-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LazyPageComponent {
  readonly data: Observable<WeatherItem>;

  readonly query: string;

  constructor(private service: LazyPageService) {
    this.query = QueryExample as string;
    this.data = this.service.getData();
  }
}
