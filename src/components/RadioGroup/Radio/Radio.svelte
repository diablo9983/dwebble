<script lang="ts">
	import type {DwebbleColor, DwebbleSize} from "@dwebble/styles";
	import Box from "../../Box/Box.svelte";
	import useStyles from "./Radio.styles";
	import {CSSObject, DwebbleTheme, ProviderStyles, useDwebbleContext} from "@dwebble/styles";
	import {useUuid} from "../../../hooks/useUuid";
	import {CSSProperties} from "@emotion/serialize";
	import {createEventDispatcher} from "svelte";
	import {extractSystemStyles} from "../../../packages/dwebble-styles/src/theme/utils/extract-system-styles";

	/** Html id attribute */
	export let id = "";

	/* Html title attribute */
	export let title = "";

	/* Radio label */
	export let label = "";

	/** Radio value */
	export let value = "";

	/** Radio checked attribute */
	export let checked = false;

	/** Active radio color from theme.colors */
	export let color: DwebbleColor = "primary";

	/** Predefined label fontSize, radio width, height and border-radius */
	export let size: DwebbleSize = "sm";

	/** Static selector base */
	export let __staticSelector = "radio";

	/* Disabled input state */
	export let disabled = false;

	/* Shared Props */
	/* Additional class names */
	export let classNames: Partial<Record<string, string>> = {};

	/* Component style */
	export let style: CSSProperties|null = null;

	/* Component Styles API style */
	export let styles: ProviderStyles = {};

	/* Component root element style */
	export let sx: CSSObject | ((theme: DwebbleTheme) => CSSObject) = {};

	/* Component additional class name */
	let className = "";
	export { className as class };
	/* Shared props end */

	const dispatch = createEventDispatcher();
	let uuid, classes, cx, systemStyles = {}, restProps = {};
	const { dwebbleTheme, dwebbleStyles } = useDwebbleContext();
	$: if ($$restProps) {
		const extractedStyles = extractSystemStyles($$restProps);
		systemStyles = extractedStyles.systemStyles;
		restProps = extractedStyles.rest;
	}
	$: if ($dwebbleTheme || $dwebbleStyles) {
		const elementStyles = useStyles(
			{ color, size },
			{ classNames, styles, name: __staticSelector }
		);

		classes = elementStyles.classes;
		cx = elementStyles.cx;
	}
	$: uuid = useUuid(id);
</script>

<Box
	class={cx(classes.radioWrapper, className)}
	{style}
	{title}
	{sx}
	{...systemStyles}
>
	<label class={cx(classes.label, { [classes.labelDisabled]: disabled })} for={uuid}>
		<input
			{...restProps}
			class={classes.radio}
			type="radio"
			id={uuid}
			{disabled}
			{checked}
			on:change={() => dispatch("change", { value, checked: true })}
		>
		{#if label.length}
			<span>{label}</span>
		{/if}
	</label>
</Box>
