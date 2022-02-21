import {getContext, hasContext, setContext} from "svelte";
import {DEFAULT_THEME} from "./default-theme";
import {writable} from "svelte/store";
import type {Writable} from "svelte/store";
import type {Options as EmotionCacheOptions} from "@emotion/cache";
import type {DwebbleTheme} from "./types";
import type {DwebbleThemeContext, ProviderStyles} from "./types/DwebbleProvider";

function getContextValue(key) {
	const context = getContext("dwebble");
	if (!context[key]) {
		return;
	}

	let value;
	const unsubscribe = context[key].subscribe(currentValue => (value = currentValue));
	unsubscribe();

	return value;
}

export function useDwebbleTheme() {
	const theme = getContextValue("theme");
	return theme || DEFAULT_THEME;
}

export function useDwebbleThemeStyles() {
	const styles = getContextValue("styles");
	return styles || {};
}

export function useDwebbleEmotionOptions(): EmotionCacheOptions {
	const emotionOptions = getContextValue("emotionOptions");
	return emotionOptions || { key: 'dwebble', prepend: true };
}

export function useDwebbleContext() {
	let dwebbleTheme: Writable<DwebbleTheme>;
	let dwebbleStyles: Writable<ProviderStyles>;
	let dwebbleEmotionOptions: Writable<EmotionCacheOptions>;

	if (!hasContext('dwebble')) {
		dwebbleTheme = writable<DwebbleTheme>(DEFAULT_THEME);
		dwebbleStyles = writable<ProviderStyles>({});
		dwebbleEmotionOptions = writable<EmotionCacheOptions>({key: "dwebble"});

		setContext('dwebble', {
			theme: dwebbleTheme,
			styles: dwebbleStyles,
			emotionOptions: dwebbleEmotionOptions
		});
	} else {
		const context: DwebbleThemeContext = getContext('dwebble');
		dwebbleTheme = context.theme;
		dwebbleStyles = context.styles;
		dwebbleEmotionOptions = context.emotionOptions;
	}

	return {
		dwebbleTheme,
		dwebbleStyles,
		dwebbleEmotionOptions
	}
}
