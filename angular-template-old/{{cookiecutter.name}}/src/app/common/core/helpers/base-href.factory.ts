import { InjectFlags, Injector } from '@angular/core';

import { SingleSpaProps, SingleSpaPropsToken } from '@single-spa-local';

export function baseHrefFactory(injector: Injector): string {
  const tokenValue = injector.get<Partial<SingleSpaProps>>(
    SingleSpaPropsToken,
    {},
    InjectFlags.Optional,
  );

  return (tokenValue as SingleSpaProps).prefix || '/';
}
