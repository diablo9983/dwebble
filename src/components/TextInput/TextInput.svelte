<script lang="ts">
	import {SvelteComponent} from "svelte";
	import InputWrapper from "../InputWrapper/InputWrapper.svelte";
	import Input from "../Input/Input.svelte";
	import {useUuid} from "../../hooks/useUuid";
	import type {DwebbleSize} from "../../styles/src";
	import type {TextInputTypes} from "./TextInput.types";
	import type {ProviderStyles} from "../../styles/src/theme/types/DwebbleProvider";

	let className;

	/* Adds red asterisk on the right side of label and sets required on input element */
	export let required: boolean = false;

	/* Input label, displayed before input */
	export let label: string = "";

	/* Input description, displayed after label */
	export let description: string = "";

	/* Displays error message after input */
	export let error: SvelteComponent|null = null;

	/* id is used to bind input and label, if not passed unique id will be generated for each input */
	export let id: string = "";

	/* Adds icon on the left side of input */
	export let icon: SvelteComponent|null = null;

	/* Input element type */
	export let type: TextInputTypes = "text";

	/* Props passed to root element (InputWrapper component) */
	export let wrapperProps: { [key: string]: any } = {}

	/* Input size */
	export let size: DwebbleSize = "sm";

	export let classNames: string = "";
	export let style: string = "";
	export let styles: ProviderStyles = {};
	export let sx: object = {};
	export { className as class };

	// const { margins, restProps } = extractMargins($$restProps);

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
	__staticSelector="TextInput"
	{...wrapperProps}>
	<Input
		{...$$restProps}
		{required}
		id={uuid}
		{type}
		invalid={!!error}
		{icon}
		{size}
		{classNames}
		{styles}
		__staticSelector="TextInput"
	/>
</InputWrapper>
