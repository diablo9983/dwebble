import type { DwebbleThemeBase } from '../../../types';

export function themeColor(theme: DwebbleThemeBase) {
  return (color: string, shade: number, primaryFallback: boolean = true) => {
    const primaryShades = theme.colors[theme.primaryColor];
    return color in theme.colors
      ? theme.colors[color][shade]
      : primaryFallback
      ? primaryShades[shade]
      : color;
  };
}
