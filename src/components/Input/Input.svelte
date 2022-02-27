<script lang="ts">
	import {SvelteComponent} from "svelte";
	import useStyles from "./Input.styles";
	import type {InputVariant} from "./Input.types";
	import type {CSSObject, DwebbleTheme, DwebbleNumberSize, DwebbleSize} from "../../styles/src";
	import {extractMargins, useDwebbleContext} from "../../styles/src";
	import {CSSProperties} from "@emotion/serialize";
	import {ProviderStyles} from "../../styles/src/theme/types/DwebbleProvider";
	import Box from "../Box/Box.svelte";

	/* id is used to bind input and label, if not passed unique id will be generated for each input */
	export let id = "";

	/* Input element type */
	export let type = "text";

	/* Sets border color to red and aria-invalid=true on input element */
	export let invalid = false;

	/* Adds icon on the left side of input */
	export let icon: SvelteComponent|null = null;

	/* Width of icon section in px */
	export let iconWidth = 0;

	/* Right section of input, similar to icon but on the right */
	export let rightSection: SvelteComponent|null = null;

	/* Width of right section, is used to calculate input padding-right */
	export let rightSectionWidth = 0;

	/* Props spread to rightSection div element */
	export let rightSectionProps: Record<string, any> = {};

	/* Properties spread to root element */
	export let wrapperProps: Record<string, any> = {};

	/* Sets required on input element */
	export let required = false;

	/* Input border-radius from theme or number to set border-radius in px */
	export let radius: DwebbleNumberSize = "sm";

	/* Defines input appearance, defaults to default in light color scheme and filled in dark */
	export let variant: InputVariant = "default";

	/* Will input have multiple lines? */
	export let multiline = false;

	/* Disabled input state */
	export let disabled = false;

	/* Input size */
	export let size: DwebbleSize = "sm";

	/** Static css selector base */
	export let __staticSelector: string;

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

	/* Component margins */
	const { margins, rest } = extractMargins($$restProps);
	/* Shared props end */

	let classes, cx;
	const { dwebbleTheme, dwebbleStyles } = useDwebbleContext();
	const _variant = variant || ($dwebbleTheme.colorScheme === 'dark' ? 'filled' : 'default');

	$: if ($dwebbleTheme || $dwebbleStyles) {
		const elementStyles = useStyles(
			{
				radius,
				size,
				multiline,
				variant: _variant,
				invalid,
				rightSectionWidth,
				iconWidth,
				withRightSection: !!rightSection,
			},
			{classNames, styles, name: __staticSelector}
		);
		classes = elementStyles.classes;
		cx = elementStyles.cx;
	}
</script>

<Box
	class={cx(classes.wrapper, className)}
	{sx}
	{style}
	{...margins}
	{...wrapperProps}
>
	{#if icon}
		<div class={classes.icon}>{icon}</div>}
	{/if}

	<input
		on:input
		on:change
		{id}
		{...rest}
		{required}
		aria-invalid={invalid}
		{disabled}
		class={cx(classes[`${_variant}Variant`], classes.input, {
			[classes.withIcon]: icon,
			[classes.invalid]: invalid,
			[classes.disabled]: disabled
		})}
	/>

	{#if rightSection}
		<div {...rightSectionProps} class={classes.rightSection}>
			{rightSection}
		</div>
	{/if}
</Box>
