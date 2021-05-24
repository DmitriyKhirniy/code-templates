import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { DeployUrlToken } from '../../tokens/deploy-url.token';

@Injectable({ providedIn: 'root' })
export class SvgService {
  sprite: HTMLElement;

  constructor(
    private http: HttpClient,
    @Inject(DeployUrlToken) private readonly deployUrl: string,
  ) {}

  load(): Promise<void> {
    return new Promise((resolve) => {
      const headers = new HttpHeaders();
      headers.set('Accept', 'image/svg+xml');

      this.http
        .get(`${this.deployUrl}assets/images/sprite.svg`, {
          headers,
          responseType: 'text',
        })
        .subscribe(
          (response) => {
            this.setSprite(response);
            resolve();
          },
          () => {
            console.error('Could not load svg images');
          },
        );
    });
  }

  private setSprite(response: string): void {
    const parser = new DOMParser();
    const svgDocument = parser.parseFromString(response, 'image/svg+xml');

    svgDocument.documentElement.style.width = '0';
    svgDocument.documentElement.style.height = '0';
    svgDocument.documentElement.style.position = 'absolute';

    this.sprite = svgDocument.documentElement;
  }
}
