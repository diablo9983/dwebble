import type {DwebbleThemeBase, DwebbleNumberSize} from '../../../types';
import { size } from '../size/size';

export function largerThan(theme: DwebbleThemeBase) {
  return (breakpoint: DwebbleNumberSize) =>
    `@media (min-width: ${size({ size: breakpoint, sizes: theme.breakpoints }) + 1}px)`;
}

export function smallerThan(theme: DwebbleThemeBase) {
  return (breakpoint: DwebbleNumberSize) =>
    `@media (max-width: ${size({ size: breakpoint, sizes: theme.breakpoints })}px)`;
}
