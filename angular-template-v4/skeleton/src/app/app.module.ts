import { BrowserModule } from '@angular/platform-browser';
import {
  APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule,
} from '@angular/core';

import { LocalizationModule, translationPropsFactory } from '@core/services/localization';
import { SingleSpaProps, singleSpaPropsStream, SingleSpaPropsToken } from '@single-spa-local';
import { LocalizationConfigurationToken } from '@core/tokens';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AccessTokenInterceptor } from '@core/interceptors/access-token.interceptor';
import { TokenService } from '@core/services';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from '@core/core.module';
import { EmptyRouteModule } from './modules/empty-route';
import { MainModule } from './modules/main/main.module';
import { svgProviderFactory, SvgService } from '@core/services/svg';

function propsFactory(injector: Injector): Partial<SingleSpaProps> {
  const tokenService = injector.get(TokenService);
  const props = singleSpaPropsStream.getValue();

  if (tokenService) {
    tokenService.setToken(props.accessToken);
  }
  return props;
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    EmptyRouteModule,
    MainModule,
    LocalizationModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: svgProviderFactory,
      deps: [SvgService],
      multi: true,
    },
    {
      provide: SingleSpaPropsToken,
      useFactory: propsFactory,
      deps: [Injector],
    },
    {
      provide: LocalizationConfigurationToken,
      useFactory: translationPropsFactory,
      deps: [Injector],
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AccessTokenInterceptor,
      multi: true,
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
