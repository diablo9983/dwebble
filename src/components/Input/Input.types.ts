import type useStyles from "./Input.styles";
import type {ClassNames, DwebbleNumberSize, DwebbleSize} from "@dwebble/styles";

export type InputVariant = 'default' | 'filled' | 'unstyled' | 'headless';

export type InputStylesNames = ClassNames<typeof useStyles>;

export interface InputStyles {
	radius: DwebbleNumberSize;
	size: DwebbleSize;
	variant: InputVariant;
	multiline: boolean;
	invalid: boolean;
	rightSectionWidth: number;
	withRightSection: boolean;
	iconWidth: number;
}
