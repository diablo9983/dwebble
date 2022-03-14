<script lang="ts">
	import {InputWrapper} from "../InputWrapper/index.js";
	import type {DwebbleColor, DwebbleNumberSize, DwebbleSize} from "@dwebble/styles";
	import {useUuid} from "../../hooks/useUuid";
	import Group from "../Group/Group.svelte";
	import {ProviderStyles} from "@dwebble/styles";
	import Radio from "./Radio/Radio.svelte";
	import {createEventDispatcher} from "svelte";

	/** Input name attribute, used to bind radios in one group, by default generated randomly with use-id hook */
	export let name = "";

	/** Value of currently selected radio */
	export let value = "";

	/** Horizontal or vertical orientation */
	export let orientation: 'horizontal' | 'vertical' = "horizontal";

	/** Spacing between radios in horizontal orientation */
	export let spacing: DwebbleNumberSize = "sm";

	/** Active radio color from theme.colors */
	export let color: DwebbleColor = "primary";

	/** Predefined label fontSize, radio width, height and border-radius */
	export let size: DwebbleSize = "sm";

	/** Props spread to InputWrapper */
	export let wrapperProps: Record<string, any> = {};

	export let options: {label: string, value: string}[] = [];

	/* Shared Props */
	/* Additional class names */
	export let classNames: Partial<Record<string, string>> = {};

	/* Component Styles API style */
	export let styles: ProviderStyles = {};
	/* Shared props end */

	const dispatch = createEventDispatcher();

	const handleChange = ({ detail }: Event) => {
		value = detail.value;
		dispatch("change", { value });
	}

	let uuid;
	$: uuid = useUuid(name);
</script>

<InputWrapper
	labelElement="div"
	{size}
	__staticSelector="RadioGroup"
	{classNames}
	{styles}
	{...wrapperProps}
>
	<Group
		role="radiogroup"
		{spacing}
		direction={orientation === 'horizontal' ? 'row' : 'column'}
		style={{ paddingTop: 5 }}
	>
		{#each options as option (option.value)}
			<Radio
				label={option.label}
				value={option.value}
				name={uuid}
				{color}
				{size}
				{classNames}
				{styles}
				disabled={!!option.disabled}
				checked={option.value === value}
				__staticSelector="RadioGroup"
				on:change={handleChange}
			/>
		{/each}
	</Group>
</InputWrapper>
