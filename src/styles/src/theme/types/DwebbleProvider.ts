import type {DwebbleTheme} from "./DwebbleTheme";
import type {Options as EmotionCacheOptions} from "@emotion/cache";
import type {CSSObject} from "../../tss";

export type ProviderStyles = Record<
	string,
	Record<string, CSSObject> | ((theme: DwebbleTheme) => Record<string, CSSObject>)
>;

export interface DwebbleThemeContext {
	theme: DwebbleTheme;
	styles: ProviderStyles;
	emotionOptions: EmotionCacheOptions;
}
