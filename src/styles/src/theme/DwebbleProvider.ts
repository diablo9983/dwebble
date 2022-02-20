import {getContext, hasContext, setContext} from "svelte";
import {DEFAULT_THEME} from "./default-theme";
import type { Options as EmotionCacheOptions } from "@emotion/cache";
import {writable} from "svelte/store";
import {DwebbleTheme} from "./types";

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

export function spawnContext() {
	let dwebbleTheme = writable<DwebbleTheme>(DEFAULT_THEME);

	if (!hasContext('dwebble')) {
		setContext('dwebble', {
			theme: dwebbleTheme
		});
	} else {
		const context = getContext('dwebble');
		dwebbleTheme = context.theme;
	}

	return {
		dwebbleTheme
	}
}
