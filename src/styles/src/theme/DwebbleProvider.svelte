<script lang="ts">
	import {DEFAULT_THEME} from "../index";
	import {mergeTheme} from "./utils/merge-theme/merge-theme";
	import {useDwebbleContext} from "./DwebbleProvider.ts";

	export let theme = {};

	let { dwebbleTheme } = useDwebbleContext();

	$: if (theme) {
		$dwebbleTheme = mergeTheme(DEFAULT_THEME, theme);
	}
</script>

<slot />
