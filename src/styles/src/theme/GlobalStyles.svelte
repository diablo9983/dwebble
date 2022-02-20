<script lang="ts">
	import {useDwebbleContext} from "./DwebbleProvider.ts";
	import Global from "./Global.svelte";

	const { dwebbleTheme } = useDwebbleContext();
	let styles;

	$: $dwebbleTheme && (styles = {
		'*, *::before, *::after': {
			boxSizing: 'border-box'
		} as any,
		body: {
			...$dwebbleTheme.fn.fontStyles(),
			backgroundColor: $dwebbleTheme.colorScheme === 'dark' ? $dwebbleTheme.colors.dark[7] : $dwebbleTheme.white,
			color: $dwebbleTheme.colorScheme === 'dark' ? $dwebbleTheme.colors.dark[0] : $dwebbleTheme.black,
			lineHeight: $dwebbleTheme.lineHeight,
			fontSize: $dwebbleTheme.fontSizes.md
		} as any
	});
</script>

<Global {styles} />
