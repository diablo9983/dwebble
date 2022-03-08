<script lang="ts">
	import type {DwebbleColor, DwebbleSize} from "@dwebble/styles";
	import useStyles from "./Thumb.styles";
	import {ProviderStyles, useDwebbleContext} from "@dwebble/styles";
	import Box from "../../Box/Box.svelte";
	import {useDwebbleTheme} from "@dwebble/styles";
	import {createEventDispatcher} from "svelte";
	import {fade} from "svelte/transition";

	export let ref = null;
	export let max;
	export let min;
	export let value;
	export let position;
	export let color: DwebbleColor = "primary";
	export let size: DwebbleSize = "sm";
	export let label;
	export let labelAlwaysOn = false;
	export let showLabelOnHover = false;
	export let dragging = false;
	export let thumbLabel = "";

	/* Shared Props */
	/* Additional class names */
	export let classNames: Partial<Record<string, string>> = {};

	/* Component Styles API style */
	export let styles: ProviderStyles = {};

	let focused = false;
	let isVisible: boolean;

	const dispatch = createEventDispatcher();

	const handleMouseDown = (event) => {
		dispatch("mousedown", event);
	}

	const theme = useDwebbleTheme();
	let classes, cx;
	const { dwebbleTheme, dwebbleStyles } = useDwebbleContext();
	$: if ($dwebbleTheme || $dwebbleStyles) {
		const elementStyles = useStyles(
			{ color, size },
			{ classNames, styles, name: 'Slider' }
		);
		classes = elementStyles.classes;
		cx = elementStyles.cx;
	}
	$: isVisible = labelAlwaysOn || dragging || focused || showLabelOnHover;
</script>

<Box
	tabIndex={0}
	role="slider"
	aria-label={thumbLabel}
	aria-valuemax={max}
	aria-valuemin={min}
	aria-valuenow={value}
	bind:ref={ref}
	class={cx(classes.thumb, {
		[classes.dragging]: dragging
	})}
	on:focus={() => {
		focused = true;
		dispatch("focus");
	}}
	on:blur={() => {
		focused = false;
		dispatch("blur");
	}}
	on:touchstart={handleMouseDown}
	on:mousedown={handleMouseDown}
	on:click={(event) => event.stopPropagation()}
	sx={{ left: `${position}%` }}
>
	<slot />
	{#if label && isVisible}
		<div transition:fade class={classes.label}>
			{label}
		</div>
	{/if}
</Box>
