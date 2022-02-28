<script lang="ts">
	import {CSSProperties} from "@emotion/serialize";
	import {ProviderStyles} from "../../packages/dwebble-styles/src/theme/types/DwebbleProvider";
	import {CSSObject, DwebbleSize, DwebbleTheme, extractMargins, useDwebbleContext} from "../../packages/dwebble-styles/src";
	import useStyles from "./InputWrapper.styles";
	import Box from "../Box/Box.svelte";
	import Text from "../Text/Text.svelte";

	/** Html for attribute label prop */
	export let id: string = "";

	/** Input label, displayed before input */
	export let label = "";

	/** Render label as label with html for attribute or as div */
	export let labelElement: 'label' | 'div' = "label";

	/** Input description, displayed after label */
	export let description = "";

	/** Displays error message after input */
	export let error = "";

	/** Adds red asterisk on the right side of label */
	export let required = false;

	/** Props spread to label element */
	export let labelProps: Record<string, any> = {};

	/** Props spread to description element */
	export let descriptionProps: Record<string, any> = {};

	/** Props spread to error element */
	export let errorProps: Record<string, any> = {};

	/* Input size */
	export let size: DwebbleSize = "sm";

	/** Static css selector base */
	export let __staticSelector: string = "";

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
	const { margins } = extractMargins($$restProps);
	/* Shared props end */

	let classes, cx;
	const { dwebbleTheme, dwebbleStyles } = useDwebbleContext();
	$: if ($dwebbleTheme || $dwebbleStyles) {
		const elementStyles = useStyles({
			size
		}, {
			classNames,
			styles,
			name: __staticSelector
		});
		classes = elementStyles.classes;
		cx = elementStyles.cx;
	}

	let _labelProps;
	$: _labelProps = {
		...labelProps,
		id: id ? `${id}-label` : undefined
	}
</script>

<Box class={cx(classes.root, className)} {...$$restProps}>
	{#if label}
		{#if labelElement === "label"}
			<label {..._labelProps} class={classes.label} for={id}>
				{label}
				{#if required}
					<span class={classes.required}> *</span>
				{/if}
			</label>
		{:else}
			<div {..._labelProps} class={classes.label}>
				{label}
				{#if required}
					<span class={classes.required}> *</span>
				{/if}
			</div>
		{/if}
	{/if}

	{#if description}
		<Text {...descriptionProps} color="gray" class={classes.description}>
			{description}
		</Text>
	{/if}

	<slot />

	{#if error}
		<Text {...errorProps} size={size} class={classes.error}>
			{error}
		</Text>
	{/if}
</Box>
