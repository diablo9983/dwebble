<script lang="ts">
	import {DEFAULT_THEME} from "../index";
	import {mergeTheme} from "./utils/merge-theme/merge-theme";
	import {spawnContext} from "./DwebbleProvider.ts";

	export let theme = {};

	let { dwebbleTheme } = spawnContext();

	$: if (theme) {
		$dwebbleTheme = mergeTheme(DEFAULT_THEME, theme);
	}
</script>

<slot />
