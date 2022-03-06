import type {DwebbleColor, DwebbleNumberSize, DwebbleTheme} from "../../packages/dwebble-styles/src";

export type ActionIconVariant =
	| 'hover'
	| 'filled'
	| 'outline'
	| 'light'
	| 'default'
	| 'transparent';

export interface ActionIconStyles {
	color: DwebbleColor;
	size: DwebbleNumberSize;
	radius: DwebbleNumberSize;
}

export interface GetVariantStyles {
	variant: ActionIconVariant;
	theme: DwebbleTheme;
	color: DwebbleColor;
}
