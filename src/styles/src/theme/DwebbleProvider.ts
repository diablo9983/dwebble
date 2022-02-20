import {getContext, hasContext, setContext} from "svelte";
import {DEFAULT_THEME} from "./default-theme";
import type { Options as EmotionCacheOptions } from "@emotion/cache";
import {Writable, writable} from "svelte/store";
import type {DwebbleTheme} from "./types";
import type {DwebbleThemeContext} from "./types/DwebbleProvider";

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

	if (!hasContext('dwebble')) {
		dwebbleTheme = writable<DwebbleTheme>(DEFAULT_THEME);
		setContext('dwebble', {
			theme: dwebbleTheme
		});
	} else {
		const context: DwebbleThemeContext = getContext('dwebble');
		dwebbleTheme = context.theme;
	}

	return {
		dwebbleTheme
	}
}
