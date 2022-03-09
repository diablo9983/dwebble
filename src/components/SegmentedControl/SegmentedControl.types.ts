import type {DwebbleColor, DwebbleNumberSize, DwebbleSize} from "@dwebble/styles";

export interface SegmentedControlStyles {
	fullWidth: boolean;
	color: DwebbleColor;
	radius: DwebbleNumberSize;
	shouldAnimate: boolean;
	transitionDuration: number;
	transitionTimingFunction: string;
	size: DwebbleSize;
	orientation: 'vertical' | 'horizontal';
}

export interface SegmentedControlItem {
	value: string;
	label: string;
}
