// @ts-nocheck
import type {DwebbleTheme, DwebbleThemeBase, DwebbleThemeOverride} from "../../types";
import { attachFunctions } from '../../functions/attach-functions';

export function mergeTheme(
	currentTheme: DwebbleThemeBase,
	themeOverride?: DwebbleThemeOverride
): DwebbleTheme {
	if (!themeOverride) {
		return attachFunctions(currentTheme);
	}

	return attachFunctions(
		// @ts-ignore
		Object.keys(currentTheme).reduce((acc, key) => {
			if (key === 'headings' && themeOverride.headings) {
				const sizes = themeOverride.headings.sizes
					? Object.keys(currentTheme.headings.sizes).reduce((headingsAcc, h) => {
						// eslint-disable-next-line no-param-reassign
						headingsAcc[h] = {
							...currentTheme.headings.sizes[h],
							...themeOverride.headings.sizes[h],
						};
						return headingsAcc;
					}, {} as DwebbleThemeBase.headings.sizes)
					: currentTheme.headings.sizes;
				return {
					...acc,
					headings: {
						...currentTheme.headings,
						...themeOverride.headings,
						sizes,
					},
				};
			}

			acc[key] =
				typeof themeOverride[key] === 'object'
					? { ...currentTheme[key], ...themeOverride[key] }
					: themeOverride[key] || currentTheme[key];
			return acc;
		}, {} as DwebbleThemeBase)
	);
}
