import {createStyles} from "@dwebble/styles";
import type {SliderRootStyles} from "./Root.types";

export const sizes = {
	xs: 4,
	sm: 6,
	md: 8,
	lg: 10,
	xl: 12,
};

export default createStyles((theme, { size }: SliderRootStyles) => ({
	root: {
		...theme.fn.fontStyles(),
		WebkitTapHighlightColor: 'transparent',
		outline: 0,
		height: theme.fn.size({ sizes, size }) * 2,
		display: 'flex',
		alignItems: 'center',
		cursor: 'pointer',
	},
}));
