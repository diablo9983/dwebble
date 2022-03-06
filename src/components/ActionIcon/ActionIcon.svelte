<script lang="ts">
	import type {DwebbleColor, DwebbleSize} from "../../packages/dwebble-styles/src";
	import type {ActionIconVariant} from "./ActionIcon.types";
	import type {LoaderProps} from "../Loader";
	import {getSharedColorScheme, ProviderStyles, useDwebbleContext} from "../../packages/dwebble-styles/src";
	import useStyles, {sizes} from "./ActionIcon.styles";
	import Box from "../Box/Box.svelte";
	import {Loader} from "../Loader/index.js";
	import {useDwebbleTheme} from "../../packages/dwebble-styles/src";

	/** Button hover, active and icon colors from theme */
	export let color: DwebbleColor = "gray";

	/** Predefined icon size or number to set width and height in px */
	export let size: DwebbleSize = "sm";

	/** Controls appearance */
	export let variant: ActionIconVariant = "hover";

	/** Props spread to Loader component */
	export let loaderProps: LoaderProps = {};

	/** Indicate loading state */
	export let loading = false;

	export let disabled = false;

	/* Shared Props */
	/* Additional class names */
	export let classNames: Partial<Record<string, string>> = {};

	/* Component Styles API style */
	export let styles: ProviderStyles = {};

	/* Component additional class name */
	let className = "";
	export { className as class };
	/* Shared props end */

	let classes, cx;
	const theme = useDwebbleTheme();
	const { dwebbleTheme, dwebbleStyles } = useDwebbleContext();
	$: if ($dwebbleTheme || $dwebbleStyles) {
		const elementStyles = useStyles({
			size,
			color
		}, {
			classNames,
			styles,
			name: "ActionIcon"
		});
		classes = elementStyles.classes;
		cx = elementStyles.cx;
	}

	const colors = getSharedColorScheme({ color, theme, variant: 'light' });
</script>

<Box
	class={cx(classes[variant], classes.root, { [classes.loading]: loading }, className)}
	type="button"
	disabled={disabled || loading}
	on:keydown
	on:keyup
	on:mouseup
	on:mousedown
	on:click
	{...$$restProps}
>
	{#if loading}
		<Loader color={colors.color} size={theme.fn.size({ size, sizes }) - 12} {...loaderProps} />
	{:else}
		<slot />
	{/if}
</Box>
