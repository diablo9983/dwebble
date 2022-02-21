<script lang="ts">
	import {DEFAULT_THEME} from "../index";
	import {mergeTheme} from "./utils/merge-theme/merge-theme";
	import {useDwebbleContext} from "./DwebbleProvider.ts";
	import GlobalStyles from "./GlobalStyles.svelte";
	import NormalizeCSS from "./NormalizeCSS.svelte";

	export let theme = {};
	export let styles = {};
	export let emotionOptions = { key: "dwebble", prepend: true };

	let { dwebbleTheme, dwebbleStyles, dwebbleEmotionOptions } = useDwebbleContext();

	$: if (theme) {
		$dwebbleTheme = mergeTheme(DEFAULT_THEME, theme);
	}
	$: if (styles) {
		$dwebbleStyles = styles;
	}
	$: if (emotionOptions) {
		$dwebbleEmotionOptions = emotionOptions;
	}
</script>

<NormalizeCSS />
<GlobalStyles />
<slot />
