import { InjectionToken } from '@angular/core';

import { SingleSpaProps } from './single-spa-props';

export const SingleSpaPropsToken: InjectionToken<SingleSpaProps> = new
InjectionToken<SingleSpaProps>('SingleSpaPropsToken');
