<script lang="ts">
	import Box from "../../Box/Box.svelte";
	import {DwebbleSize, ProviderStyles, useDwebbleContext} from "@dwebble/styles";
	import useStyles from "./Root.styles";

	export let ref = null;

	/* Track size */
	export let size: DwebbleSize = "sm";

	/* Shared Props */
	/* Additional class names */
	export let classNames: Partial<Record<string, string>> = {};

	/* Component Styles API style */
	export let styles: ProviderStyles = {};

	/* Component additional class name */
	let className = "";
	export { className as class };
	/* Shared Props end */

	let classes, cx;
	const { dwebbleTheme, dwebbleStyles } = useDwebbleContext();
	$: if ($dwebbleTheme || $dwebbleStyles) {
		const elementStyles = useStyles({ size }, { classNames, styles, name: "Slider" });
		classes = elementStyles.classes;
		cx = elementStyles.cx;
	}
</script>

<Box {...$$restProps} tabIndex={-1} on:keydown on:mousedown bind:ref={ref} class={cx(classes.root, className)}>
	<slot />
</Box>
