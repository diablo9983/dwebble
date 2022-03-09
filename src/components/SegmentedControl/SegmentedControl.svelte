<script lang="ts">
	import type {SegmentedControlItem} from "./SegmentedControl.types";
	import type {DwebbleColor, DwebbleNumberSize, DwebbleSize} from "@dwebble/styles";
	import {ProviderStyles, useDwebbleContext} from "@dwebble/styles";
	import useStyles, {WRAPPER_PADDING} from "./SegmentedControl.styles";
	import Box from "../Box/Box.svelte";
	import {writable} from "svelte/store";
	import {useUuid} from "../../hooks/useUuid";
	import {createEventDispatcher, onDestroy, onMount} from "svelte";
	import {useResizeObserver} from "../../hooks/useResizeObserver";

	/** Data based on which controls are rendered */
	export let data: string[] | SegmentedControlItem[] = [];

	/** Current selected value */
	export let value = "";

	/** Disabled input state */
	export let disabled = false;

	/** Name of the radio group, default to random id */
	export let name = "";

	/** True if component should have 100% width */
	export let fullWidth = false;

	/** Active control color from theme.colors, defaults to white in light color scheme and theme.colors.dark[9] in dark */
	export let color: DwebbleColor = "primary";

	/** Controls font-size, paddings and height */
	export let size: DwebbleSize = "sm";

	/** Border-radius from theme or number to set border-radius in px */
	export let radius: DwebbleNumberSize = "sm";

	/** Transition duration in ms, set to 0 to turn off transitions */
	export let transitionDuration = 200;

	/** Transition timing function for all transitions, defaults to theme.transitionTimingFunction */
	export let transitionTimingFunction = undefined;

	/** Default value for uncontrolled component */
	export let defaultValue = "";

	/** Display Vertically */
	export let orientation: 'vertical' | 'horizontal' = "horizontal";

	/* Shared Props */
	/* Additional class names */
	export let classNames: Partial<Record<string, string>> = {};

	/* Component Styles API style */
	export let styles: ProviderStyles = {};

	/* Component additional class name */
	let className = "";
	export { className as class };
	/* Shared props end */

	let _value = writable(value);

	const uuid = useUuid(name);

	let _data: any[];
	$: _data = data.map((item: any) =>
		typeof item === 'string' ? { label: item, value: item } : item
	);

	let container;
	let containerRect;
	let destroyObserver;
	let activePosition = {
		width: 0,
		height: 0,
		translate: [0, 0],
	};
	const references = {};
	const dispatch = createEventDispatcher();

	let classes, cx, theme;
	const { dwebbleTheme, dwebbleStyles } = useDwebbleContext();
	$: if ($dwebbleTheme || $dwebbleStyles) {
		const elementStyles = useStyles(
			{
				size,
				fullWidth,
				color,
				radius,
				shouldAnimate: true,
				transitionDuration,
				transitionTimingFunction,
				orientation,
			},
			{ classNames, styles, name: 'SegmentedControl' }
		);
		classes = elementStyles.classes;
		cx = elementStyles.cx;
		theme = elementStyles.theme;
	}

	$: if ($_value && containerRect) {
		const element = references[$_value];
		const elementRect = element.getBoundingClientRect();
		const scaledValue = element.offsetWidth / elementRect.width;
		const width = elementRect.width * scaledValue || 0;
		const height = elementRect.height * scaledValue || 0;

		const offsetRight =
			containerRect.width - element.parentElement.offsetLeft + WRAPPER_PADDING - width;
		const offsetLeft = element.parentElement.offsetLeft - WRAPPER_PADDING;

		activePosition = {
			width,
			height,
			translate: [
				theme.dir === 'rtl' ? offsetRight : offsetLeft,
				element.parentElement.offsetTop - WRAPPER_PADDING,
			]
		}
	}

	$: _value.set(value);
	$: dispatch("change", { value: $_value });

	onMount(() => {
		const observer = useResizeObserver(container);
		containerRect = observer[0];
		destroyObserver = observer[1];
	});

	onDestroy(() => {
		if (typeof destroyObserver === "function") {
			destroyObserver();
		}
	});
</script>

<Box
	class={cx(classes.root, className)}
	bind:ref={container}
	{...$$restProps}
>
	{#if !!$_value}
		<Box
			class={classes.active}
			sx={{
				width: activePosition.width,
        height: activePosition.height,
        transform: `translate(${activePosition.translate[0]}px, ${activePosition.translate[1]}px )`
			}}
		/>
	{/if}
	{#each data as item (item.value)}
		<div
			class={cx(classes.control, { [classes.controlActive]: $_value === item.value })}
		>
			<input
				class={classes.input}
				{disabled}
				type="radio"
				name={uuid}
				value={item.value}
				id={`${uuid}-${item.value}`}
				checked={$_value === item.value}
				on:change={() => _value.set(item.value)}
			/>
			<label
				class={cx(classes.label, {
					[classes.labelActive]: $_value === item.value,
					[classes.disabled]: disabled
				})}
				for={`${uuid}-${item.value}`}
				bind:this={references[item.value]}
			>
				{item.label}
			</label>
		</div>
	{/each}
</Box>
