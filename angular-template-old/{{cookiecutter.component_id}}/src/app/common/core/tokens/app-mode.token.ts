import { InjectionToken } from '@angular/core';

export enum AppModeType {
  Spa = 'SPA',
  MicroFrontend = 'MICRO_FRONTEND'
}

export const AppModeToken: InjectionToken<AppModeType> = new InjectionToken<AppModeType>('AppModeToken');
