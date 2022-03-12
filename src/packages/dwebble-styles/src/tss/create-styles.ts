import type {DwebbleTheme} from "../theme";
import type {CSSObject} from "./types";
import {useDwebbleTheme} from "../theme";
import {useDwebbleThemeStyles} from "../theme/DwebbleProvider";
import {useCss} from "./use-css";
import {fromEntries} from "./utils/from-entries";
import {mergeClassNames} from "./utils/merge-class-names/merge-class-names";

export interface UseStylesOptions<Key extends string> {
	classNames?: Partial<Record<Key, string>>;
	styles?:
		| Partial<Record<Key, CSSObject>>
		| ((theme: DwebbleTheme) => Partial<Record<Key, CSSObject>>);
	name: string;
}

export function createStyles<Key extends string = string, Params = void>(
	getCssObjectOrCssObject:
		| ((
		theme: DwebbleTheme,
		params: Params,
		createRef: (refName: string) => string
	) => Record<Key, CSSObject>)
		| Record<Key, CSSObject>
) {
	const getCssObject =
		typeof getCssObjectOrCssObject === 'function'
			? getCssObjectOrCssObject
			: () => getCssObjectOrCssObject;

	function useStyles(params: Params, options?: UseStylesOptions<Key>) {
		const theme = useDwebbleTheme();
		const themeStyles = useDwebbleThemeStyles()[options?.name];

		const { css, cx } = useCss();

		let count = 0;

		function createRef(refName: string) {
			count += 1;
			return `dwebble-ref_${refName || ''}_${count}`;
		}

		const cssObject = getCssObject(theme, params, createRef);

		const _styles =
			typeof options?.styles === 'function' ? options?.styles(theme) : options?.styles || {};
		const _themeStyles = typeof themeStyles === 'function' ? themeStyles(theme) : themeStyles || {};

		const classes = fromEntries(
			Object.keys(cssObject).map((key) => {
				const mergedStyles = cx(css(cssObject[key]), css(_themeStyles[key]), css(_styles[key]));
				return [key, mergedStyles];
			})
		) as Record<Key, string>;

		return { classes: mergeClassNames(cx, classes, options?.classNames, options?.name), cx, theme };
	}

	return useStyles;
}
