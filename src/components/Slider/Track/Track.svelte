<script lang="ts">
	import {DwebbleColor, DwebbleSize, ProviderStyles, useDwebbleContext} from "@dwebble/styles";
	import useStyles from "./Track.styles";
	import Box from "../../Box/Box.svelte";
	import {sizes} from "../Root/Root.styles.js";
	import Marks from "../Marks/Marks.svelte";
	import {createEventDispatcher} from "svelte";

	export let filled;

	export let offset;

	export let radius: DwebbleSize = "sm";
	export let color: DwebbleColor = "primary";
	export let size: DwebbleSize = "sm";

	/* Shared Props */
	/* Additional class names */
	export let classNames: Partial<Record<string, string>> = {};

	/* Component Styles API style */
	export let styles: ProviderStyles = {};

	const dispatch = createEventDispatcher();
	const handleChange = (event) => {
		event.stopPropagation();
		const { value } = event.detail;
		dispatch("change", { value });
	}

	let classes, cx;
	const { dwebbleTheme, dwebbleStyles } = useDwebbleContext();
	$: if ($dwebbleTheme || $dwebbleStyles) {
		const elementStyles = useStyles({ color, size, radius }, { classNames, styles, name: "Slider" });
		classes = elementStyles.classes;
		cx = elementStyles.cx;
	}

	$: sx = (theme) => ({
		left: `calc(${offset}% - ${theme.fn.size({ size, sizes })}px)`,
		width: `calc(${filled}% + ${theme.fn.size({ size, sizes })}px)`,
	})
</script>

<div class={cx(classes.track)} on:mouseleave on:mouseenter>
	<Box
		class={classes.bar}
		sx={sx}
	/>
	<slot />

	<Marks
		{size}
		{color}
		{offset}
		{classNames}
		{styles}
		on:change={handleChange}
		{...$$restProps}
	/>
</div>
