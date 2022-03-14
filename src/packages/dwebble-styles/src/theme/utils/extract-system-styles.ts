import type {DwebbleStyleSystemProps} from "../types/DwebbleStyleSystem";

export function extractSystemStyles(others: DwebbleStyleSystemProps & { [key: string]: any }) {
	const { m, mx, my, mt, mb, ml, mr, p, px, py, pt, pb, pl, pr, ...rest } = others;
	const systemStyles = { m, mx, my, mt, mb, ml, mr, p, px, py, pt, pb, pl, pr };

	Object.keys(systemStyles).forEach((key) => {
		if (systemStyles[key] === undefined) {
			delete systemStyles[key];
		}
	});

	return { systemStyles, rest };
}
