import { InjectFlags, InjectionToken, Injector } from '@angular/core';

import { environment } from '@environment';
import { SingleSpaProps, SingleSpaPropsToken } from '@single-spa-local';

export const ApiUrlToken: InjectionToken<string> = new InjectionToken<string>('API_URL');

export function apiUrlFactory(injector: Injector) {
  const props: Partial<SingleSpaProps> = injector.get<Partial<SingleSpaProps>>(
    SingleSpaPropsToken,
    {},
    InjectFlags.Optional,
  );

  return props.apiUrl ? `${props.apiUrl}/api` : environment.apiUrl;
}
