import { InjectFlags, InjectionToken, Injector } from '@angular/core';

import { SingleSpaProps, SingleSpaPropsToken } from '@single-spa-local';

export const DeployUrlToken: InjectionToken<string> = new InjectionToken<string>('DEPLOY_URL');

export function deployUrlFactory(injector: Injector) {
  const props: Partial<SingleSpaProps> = injector.get<Partial<SingleSpaProps>>(
    SingleSpaPropsToken,
    {},
    InjectFlags.Optional,
  );

  return props.deployUrl ? `${props.deployUrl}/` : '';
}
