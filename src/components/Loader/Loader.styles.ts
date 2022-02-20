import Bars from "./loaders/Bars.svelte";
import Oval from "./loaders/Oval.svelte";
import Dots from "./loaders/Dots.svelte";

export const LOADERS = {
	bars: Bars,
	oval: Oval,
	dots: Dots,
} as const;

export const LOADER_SIZES = {
	xs: 18,
	sm: 22,
	md: 36,
	lg: 44,
	xl: 58,
};
