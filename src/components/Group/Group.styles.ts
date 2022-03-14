import {createStyles} from "@dwebble/styles";
import type {GroupStylesParams} from "./Group.types";

const POSITIONS = {
	left: 'flex-start',
	center: 'center',
	right: 'flex-end',
	apart: 'space-between',
};

export default createStyles(
	(theme, { spacing, position, noWrap, direction, grow, align, count }: GroupStylesParams) => ({
		root: {
			boxSizing: 'border-box',
			display: 'flex',
			flexDirection: direction,
			alignItems:
				align ||
				(direction === 'row'
					? 'center'
					: grow
						? 'stretch'
						: position === 'apart'
							? 'flex-start'
							: POSITIONS[position]),
			flexWrap: noWrap ? 'nowrap' : 'wrap',
			justifyContent: direction === 'row' ? POSITIONS[position] : undefined,
			gap: theme.fn.size({ size: spacing, sizes: theme.spacing }),
		},

		child: {
			boxSizing: 'border-box',
			maxWidth:
				grow && direction === 'row'
					? `calc(${100 / count}% - ${
						theme.fn.size({ size: spacing, sizes: theme.spacing }) -
						theme.fn.size({ size: spacing, sizes: theme.spacing }) / count
					}px)`
					: undefined,
			flexGrow: grow ? 1 : 0,
		},
	})
);
