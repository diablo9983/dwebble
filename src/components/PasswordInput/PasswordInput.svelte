<script lang="ts">
	/* Adds red asterisk on the right side of label and sets required on input element */
	import {SvelteComponent} from "svelte";
	import {CSSProperties} from "@emotion/serialize";
	import {CSSObject, DwebbleSize, DwebbleTheme, extractMargins, useDwebbleContext, ProviderStyles, useDwebbleTheme} from "@dwebble/styles";
	import {useUuid} from "../../hooks/useUuid";
	import InputWrapper from "../InputWrapper/InputWrapper.svelte";
	import Input from "../Input/Input.svelte";
	import useStyles, {rightSectionSizes, buttonSizes, iconSizes} from "./PasswordInput.styles";
	import {InputVariant} from "../Input";
	import ActionIcon from "../ActionIcon/ActionIcon.svelte";
	import {useBooleanToggle} from "../../hooks/useToggle";
	import PasswordToggleIcon from "./PasswordToggleIcon.svelte";

	export let required = false;

	/* Input label, displayed before input */
	export let label = "";

	/* Input description, displayed after label */
	export let description = "";

	/* Displays error message after input */
	export let error: SvelteComponent|null = null;

	/* id is used to bind input and label, if not passed unique id will be generated for each input */
	export let id = "";

	/* Adds icon on the left side of input */
	export let icon: SvelteComponent|null = null;

	/* Defines input appearance, defaults to default in light color scheme and filled in dark */
	export let variant: InputVariant = "default";

	/* Props passed to root element (InputWrapper component) */
	export let wrapperProps: { [key: string]: any } = {}

	/* Disabled input state */
	export let disabled = false;

	/* Input size */
	export let size: DwebbleSize = "sm";

	export let toggleTabIndex: -1 | 0 = -1;

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

	/* Unique uuid */
	const uuid = useUuid(id);

	const [reveal, toggle] = useBooleanToggle(false);

	const theme = useDwebbleTheme();
	const rightSectionWidth = theme.fn.size({ size, sizes: rightSectionSizes });

	let classes, cx;
	const { dwebbleTheme, dwebbleStyles } = useDwebbleContext();
	$: if ($dwebbleTheme || $dwebbleStyles) {
		const elementStyles = useStyles({ size, rightSectionWidth }, { name: "PasswordInput" });
		classes = elementStyles.classes;
		cx = elementStyles.cx;
	}
</script>

<InputWrapper
	{required}
	id={uuid}
	{label}
	{error}
	{description}
	{size}
	class={className}
	{style}
	{classNames}
	{styles}
	__staticSelector="PasswordInput"
	{sx}
	{...margins}
	{...wrapperProps}
>
	<Input
		{required}
		invalid={!!error}
		{size}
		classNames={{...classNames, input: cx(classes.input, classNames?.input)}}
		{styles}
		{disabled}
		__staticSelector="PasswordInput"
		{rightSectionWidth}
		{variant}
	>
		<input
			on:input
			on:change
			type={$reveal ? 'text' : 'password'}
			class={cx(classes.innerInput, {
              [classes.withIcon]: icon,
              [classes.invalid]: !!error,
            })}
			{disabled}
			id={uuid}
			{...rest}
		/>

		<svelte:fragment slot="rightSection">
			{#if !disabled}
				<ActionIcon
					class={classes.visibilityToggle}
					tabIndex={toggleTabIndex}
					size={theme.fn.size({ size, sizes: buttonSizes })}
					aria-hidden
					on:mousedown={event => {
						event.preventDefault();
						toggle();
					}}
					on:keydown={event => {
						if (event.code === "Space") {
							event.preventDefault();
							toggle();
						}
					}}
				>
					<PasswordToggleIcon reveal={$reveal} size={theme.fn.size({ size, sizes: iconSizes })} />
				</ActionIcon>
			{/if}
		</svelte:fragment>
	</Input>
</InputWrapper>
