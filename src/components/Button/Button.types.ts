import type {DwebbleColor} from "../../styles/src/theme/types/DwebbleColor";
import type {DwebbleTheme} from "../../styles/src/theme/types/DwebbleTheme";
import type {DwebbleNumberSize, DwebbleSize} from "../../styles/src/theme/types/DwebbleSize";

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
