import type { DwebbleThemeBase } from '../../../types';
import type { CSSObject } from '../../../../tss';

export function fontStyles(theme: DwebbleThemeBase) {
  return (): CSSObject => ({
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    fontFamily: theme.fontFamily || 'sans-serif',
  });
}
