import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconModule } from '@share/components/svg-icon';
import { TranslocoModule } from '@ngneat/transloco';

import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  imports: [MainRoutingModule, SvgIconModule, CommonModule, TranslocoModule],
  declarations: [MainComponent],
  exports: [MainComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainModule {}
