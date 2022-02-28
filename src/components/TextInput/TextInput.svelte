<script lang="ts">
	import {SvelteComponent} from "svelte";
	import InputWrapper from "../InputWrapper/InputWrapper.svelte";
	import Input from "../Input/Input.svelte";
	import {useUuid} from "../../hooks/useUuid";
	import type {DwebbleSize} from "../../packages/dwebble-styles/src";
	import type {TextInputTypes} from "./TextInput.types";
	import {extractMargins} from "../../packages/dwebble-styles/src";
	import type {ProviderStyles} from "../../packages/dwebble-styles/src";
	import {CSSObject, DwebbleTheme} from "../../packages/dwebble-styles/src";
	import type {CSSProperties} from "@emotion/serialize";
	import {InputVariant} from "../Input";

	/* Adds red asterisk on the right side of label and sets required on input element */
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

	/* Input element type */
	export let type: TextInputTypes = "text";

	/* Defines input appearance, defaults to default in light color scheme and filled in dark */
	export let variant: InputVariant = "default";

	/* Props passed to root element (InputWrapper component) */
	export let wrapperProps: { [key: string]: any } = {}

	/* Input size */
	export let size: DwebbleSize = "sm";

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

	/* Unique uuid */
	const uuid = useUuid(id);
</script>

<InputWrapper
	{required}
	{label}
	{error}
	id={uuid}
	{description}
	{size}
	class={className}
	{style}
	{classNames}
	{styles}
	{sx}
	{...margins}
	__staticSelector="TextInput"
	{...wrapperProps}>
	<Input
		on:input
		on:change
		{...$$restProps}
		{required}
		id={uuid}
		{type}
		invalid={!!error}
		{icon}
		{size}
		{classNames}
		{styles}
		{variant}
		__staticSelector="TextInput"
	/>
</InputWrapper>
