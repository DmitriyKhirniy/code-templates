import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import { getSidebarConfig } from './sidebar-items.constants';

@Injectable({ providedIn: 'root' })
export class SidebarService {
  private readonly config: unknown;

  constructor(private router: Router, private ngZone: NgZone) {
    this.config = getSidebarConfig(this.router, this.ngZone);
  }

  getConfig(): unknown {
    return this.config;
  }
}
