import type {Property} from "csstype";
import type {Tuple} from "./Tuple";
import type {DwebbleNumberSize, DwebbleSize, DwebbleSizes} from "./DwebbleSize";
import type {CSSObject} from "../../tss";
import type {DeepPartial} from "./DeepPartial";

export type DwebbleThemeOther = Record<string, any>;

export interface HeadingStyle {
	fontSize: Property.FontSize<number>;
	lineHeight: Property.LineHeight;
}

interface DwebbleThemeFunctions {
	fontStyles(): CSSObject;
	focusStyles(): CSSObject;
	cover(offset?: number | string): CSSObject;
	themeColor(color: string, shade: number, primaryFallback?: boolean): string;
	rgba(color: string, alpha: number): string;
	size(props: { size: string | number; sizes: Record<string, any> }): any;
	linearGradient(deg: number, ...colors: string[]): string;
	radialGradient(...colors: string[]): string;
	smallerThan(breakpoint: DwebbleNumberSize): string;
	largerThan(breakpoint: DwebbleNumberSize): string;
	lighten(color: string, alpha: number): string;
	darken(color: string, alpha: number): string;
}

export interface DwebbleTheme {
	colorScheme: "light" | "dark";
	white: string;
	black: string;
	colors: Record<string, Tuple<string, 10>>;
	fontFamily: Property.FontFamily;
	fontFamilyMonospace: Property.FontFamily,
	lineHeight: Property.LineHeight;
	primaryColor: string;
	fontSizes: DwebbleSizes;
	radius: DwebbleSizes;
	spacing: DwebbleSizes;
	breakpoints: DwebbleSizes;
	shadows: Record<DwebbleSize, string>;
	headings: {
		fontFamily: Property.FontFamily;
		fontWeight: Property.FontWeight;
		sizes: {
			h1: HeadingStyle;
			h2: HeadingStyle;
			h3: HeadingStyle;
			h4: HeadingStyle;
			h5: HeadingStyle;
			h6: HeadingStyle;
		};
	};

	fn: DwebbleThemeFunctions;
}

export type DwebbleThemeBase = Omit<DwebbleTheme, 'fn'>;

export type DwebbleThemeOverride = DeepPartial<Omit<DwebbleThemeBase, 'fn' | 'other'>> & {
	other?: DwebbleThemeOther;
};
