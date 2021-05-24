import {
  ChangeDetectionStrategy, Component, ElementRef, OnInit, Renderer2,
} from '@angular/core';

import { SvgService } from '@core/services/svg';
import { SidebarService } from '@core/services/sidebar';

@Component({
  selector: 'app-root-starter',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = '{{cookiecutter.component_id}}';

  config: unknown;

  constructor(
    private svgService: SvgService,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private sidebarService: SidebarService,
  ) {
    this.config = this.sidebarService.getConfig();
  }

  ngOnInit(): void {
    this.appendSpriteToDOM(this.svgService.sprite);
  }

  private appendSpriteToDOM(sprite: HTMLElement): void {
    if (this.elementRef?.nativeElement && sprite) {
      this.renderer.appendChild(this.elementRef.nativeElement, sprite);
    }
  }
}
