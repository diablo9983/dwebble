import type {DwebbleNumberSize, DwebbleSize} from "../../styles/src";

export type InputVariant = 'default' | 'filled' | 'unstyled' | 'headless';

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
