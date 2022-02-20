import type {DwebbleTheme} from "./DwebbleTheme";
import type {Options as EmotionCacheOptions} from "@emotion/cache";
import type {CSSObject} from "../../tss";
import type {Writable} from "svelte/store";

export type ProviderStyles = Record<
	string,
	Record<string, CSSObject> | ((theme: DwebbleTheme) => Record<string, CSSObject>)
>;

export interface DwebbleThemeContext {
	theme: Writable<DwebbleTheme>;
	styles: ProviderStyles;
	emotionOptions: EmotionCacheOptions;
}
