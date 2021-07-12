import './polyfills';

import { enableProdMode, NgZone } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { singleSpaAngular, getSingleSpaExtraProviders } from 'single-spa-angular';
import { setPublicPath } from 'systemjs-webpack-interop';

import {
  AppModeToken,
  AppModeType,
  LocalizationConfiguration,
  LocalizationConfigurationToken,
} from '@core/tokens';
import { AppModule } from './app/app.module';
import { environment } from '@environment';
import { SingleSpaProps, singleSpaPropsStream, SingleSpaPropsToken } from '@single-spa-local';

if (environment.production) {
  enableProdMode();
}

const lifecycles = singleSpaAngular({
  bootstrapFunction: (singleSpaProps) => {
    const props: SingleSpaProps = singleSpaProps as SingleSpaProps;

    singleSpaPropsStream.next(props);

    setPublicPath(`${props.deployUrl}/`);

    return platformBrowserDynamic([
      {
        provide: AppModeToken,
        useValue: AppModeType.MicroFrontend,
      },
      ...getSingleSpaExtraProviders(),
      {
        provide: SingleSpaPropsToken,
        useValue: props,
      },
      {
        provide: LocalizationConfigurationToken,
        useValue: {
          currentLang: props.lang,
          availableLanguages: props.languages,
        } as LocalizationConfiguration,
      },
    ]).bootstrapModule(AppModule);
  },
  template: '<app-root-starter />',
  Router,
  NgZone,
  NavigationStart,
});

export const { bootstrap, mount, unmount } = lifecycles;
