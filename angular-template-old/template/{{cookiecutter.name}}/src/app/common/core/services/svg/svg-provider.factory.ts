import { SvgService } from './svg.service';

export function svgProviderFactory(provider: SvgService): () => Promise<void> {
  return () => provider.load();
}
