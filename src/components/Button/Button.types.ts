import type {DwebbleColor, DwebbleNumberSize, DwebbleSize, DwebbleTheme} from "../../styles/src";

export type ButtonVariant =
	| 'filled'
	| 'outline'
	| 'light'
	| 'gradient'
	| 'white'
	| 'default'
	| 'subtle';

export interface GetVariantStyles {
	theme: DwebbleTheme;
	color: DwebbleColor;
	variant: ButtonVariant;
}

export interface ButtonStylesProps {
	color: DwebbleColor;
	size: DwebbleSize;
	radius: DwebbleNumberSize;
	fullWidth: boolean;
	compact: boolean;
	gradientFrom: string;
	gradientTo: string;
	gradientDeg: number;
}
