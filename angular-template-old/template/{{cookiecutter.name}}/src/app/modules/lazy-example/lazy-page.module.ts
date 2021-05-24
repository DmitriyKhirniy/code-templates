import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyPageComponent } from './lazy-page.component';
import { LazyPageRoutingModule } from './lazy-page-routing.module';
import { LazyPageService } from './lazy-page.service';

@NgModule({
  imports: [LazyPageRoutingModule, CommonModule],
  declarations: [LazyPageComponent],
  providers: [LazyPageService],
  exports: [LazyPageComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class LazyPageModule {}
