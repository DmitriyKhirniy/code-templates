import { Router } from '@angular/router';
import { NgZone } from '@angular/core';

export const getSidebarConfig = (router: Router, ngZone: NgZone) => ({
  title: 'Angular SingleSpa starter example',
  subtitle: 'Faster MVPs through self-service',
  activeItemId: '001',
  items: [
    {
      id: '001',
      iconName: 'house-1',
      title: 'Home',
      action: () => {
        ngZone.run<void>(() => router.navigate(['/']));
      },
    },
  ],
});
