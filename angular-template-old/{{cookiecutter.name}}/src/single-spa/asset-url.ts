// In single-spa, the assets need to be loaded from a dynamic location,
// instead of hard coded to `/assets`. We use webpack public path for this.
// See https://webpack.js.org/guides/public-path/#root

import { singleSpaPropsStream } from './single-spa-props';

export function assetUrl(url: string): string {
  const urlPrefix = url.startsWith('/') ? '' : '/';
  const { deployUrl } = singleSpaPropsStream.getValue();

  if (deployUrl) {
    const publicPath = deployUrl;
    const publicPathSuffix = publicPath.endsWith('/') ? '' : '/';

    return `${publicPath}${publicPathSuffix}assets/images${urlPrefix}${url}`;
  }

  return `assets/images${urlPrefix}${url}`;
}
