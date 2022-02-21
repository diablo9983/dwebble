<script lang="ts">
	import {SvelteComponent} from "svelte";
	import useStyles from "./Input.styles";
	import type {InputVariant} from "./Input.types";
	import type {DwebbleNumberSize, DwebbleSize} from "../../styles/src";
	import {useDwebbleContext} from "../../styles/src";

	let className;

	/* id is used to bind input and label, if not passed unique id will be generated for each input */
	export let id: string = "";

	/* Input element type */
	export let type = "text";

	/* Sets border color to red and aria-invalid=true on input element */
	export let invalid: boolean = false;

	/* Adds icon on the left side of input */
	export let icon: SvelteComponent|null = null;

	/* Width of icon section in px */
	export let iconWidth: number = 0;

	/* Right section of input, similar to icon but on the right */
	export let rightSection: SvelteComponent|null = null;

	/* Width of right section, is used to calculate input padding-right */
	export let rightSectionWidth: number = 0;

	/* Props spread to rightSection div element */
	export let rightSectionProps: Record<string, any> = {};

	/* Properties spread to root element */
	export let wrapperProps: { [key: string]: any } = {};

	/* Sets required on input element */
	export let required: boolean = false;

	/* Input border-radius from theme or number to set border-radius in px */
	export let radius: DwebbleNumberSize = "sm";

	/* Defines input appearance, defaults to default in light color scheme and filled in dark */
	export let variant: InputVariant = "default";

	/* Will input have multiple lines? */
	export let multiline: boolean = false;

	/* Disabled input state */
	export let disabled: boolean = false;

	/* Input size */
	export let size: DwebbleSize = "sm";

	/** Static css selector base */
	export let __staticSelector: string;

	export { className as class };
	export let classNames: string = "";
	export let style = "";
	export let styles = {};

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

<div
	class={cx(classes.wrapper, className)}
	style={style}
	{...wrapperProps}
>
	{#if icon}
		<div class={classes.icon}>{icon}</div>}
	{/if}

	<input
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
</div>
