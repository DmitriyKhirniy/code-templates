import {
  ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Optional,
} from '@angular/core';

import { SingleSpaProps, SingleSpaPropsToken } from '@single-spa-local';
import { LocalizationService } from '@core/services/localization';

import { ToggleHeaderBus } from '@galileo/common-typings';

@Component({
  selector: 'app-main-page',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  currentLang: string;

  languages: string[];

  cardTitle = 'It\'s Custom card title';

  selectOptions: string;

  constructor(
    @Optional() @Inject(SingleSpaPropsToken) private props: SingleSpaProps,
    private cd: ChangeDetectorRef,
    private localizationService: LocalizationService,
  ) {
    this.languages = localizationService.getConfiguration().availableLanguages;
    this.setCurrentLang(localizationService.getConfiguration().currentLang);
    this.selectOptions = JSON.stringify(this.languages
      .map((lang: string) => ({ id: lang, label: lang })));
  }

  inputChanged(event: CustomEvent): void {
    this.cardTitle = event.detail as string;
  }

  handleSelect(item: { id: string }): void {
    this.localizationService.setActiveLang(item.id);
    this.currentLang = item.id;
    this.setCurrentLang(item.id);
  }

  headerToggle(hide?: boolean) {
    new ToggleHeaderBus().publish({ hide });
  }

  private setCurrentLang(currentLang: string): void {
    this.currentLang = JSON.stringify({ id: currentLang, label: currentLang });
  }
}
