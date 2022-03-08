<script lang="ts">
	import {writable} from "svelte/store";
	import {getChangeValue} from "../utils/get-change-value";
	import {DwebbleColor, DwebbleSize, ProviderStyles, useDwebbleTheme} from "@dwebble/styles";
	import {getPosition} from "../utils/get-position";
	import {useMove} from "../../../hooks/useMove";
	import SliderRoot from "../Root/Root.svelte";
	import Track from "../Track/Track.svelte";
	import Thumb from "../Thumb/Thumb.svelte";
	import {createEventDispatcher, onDestroy} from "svelte";

	export let name = "";

	export let color: DwebbleColor = "primary";

	export let size: DwebbleSize = "md";

	export let min = 0;

	export let max = 100;

	export let step = 1;

	export let value = min;

	export let label: string | number | ((value: number) => string | number) = (value) => value;

	export let marks = [];

	export let showLabelOnHover = true;

	export let labelAlwaysOn = false;

	export let thumbLabel = "";

	/* Additional class names */
	export let classNames: Partial<Record<string, string>> = {};

	/* Component Styles API style */
	export let styles: ProviderStyles = {};

	let thumb;
	let container;

	let hovered = false;
	let position;
	let _label;
	const _value = writable<number>();

	const theme = useDwebbleTheme();

	const handleChange = (val: number) => {
		const nextValue = getChangeValue({ value: val, min, max, step });
		_value.set(nextValue);
	};

	let isActive = writable(false);
	let destroyMove;
	const move = useMove();

	function handleThumbMouseDown(
		event: MouseEvent | TouchEvent
	) {
		console.log("handleThumbMouseDown");
		if (event.cancelable) {
			event.preventDefault();
			event.stopPropagation();
		}
	}

	const handleTrackKeydownCapture = (event: KeyboardEvent) => {
		switch (event.code) {
			case 'ArrowUp': {
				event.preventDefault();
				thumb.focus();
				_value.update((_value) => Math.min(Math.max(_value + step, min), max));
				break;
			}
			case 'ArrowRight': {
				event.preventDefault();
				thumb.focus();
				_value.update((_value) => Math.min(Math.max(theme.dir === 'rtl' ? _value - step : _value + step, min), max));
				break;
			}

			case 'ArrowDown': {
				event.preventDefault();
				thumb.focus();
				_value.update((_value) => Math.min(Math.max(_value - step, min), max));
				break;
			}

			case 'ArrowLeft': {
				event.preventDefault();
				thumb.focus();
				_value.update((_value) => Math.min(Math.max(theme.dir === 'rtl' ? _value + step : _value - step, min), max));
				break;
			}

			default: {
				break;
			}
		}
	};

	const dispatch = createEventDispatcher();

	$: if (container) {
		const [active, ds] = move(container, ({x}) => handleChange(x), undefined, theme.dir);
		destroyMove = ds;
		isActive = active;
	}
	$: position = getPosition({ value: $_value, min, max });
	$: dispatch("change", { value: $_value });
	$: _label = typeof label === 'function' ? label($_value) : label;

	onDestroy(() => {
		if (typeof destroyMove === 'function') {
			destroyMove();
		}
	})
</script>

<SliderRoot
	{...$$restProps}
	{size}
	{classNames}
	{styles}
	bind:ref={container}
	on:keydown={handleTrackKeydownCapture}
	on:mousedown={() => container.focus()}
>
	<Track
		offset={0}
		filled={position}
		{marks}
		{size}
		{color}
		{min}
		{max}
		value={$_value}
		on:change={({ detail: { value } }) => {
			$_value = value;
		}}
		{classNames}
		{styles}
		on:mouseenter={showLabelOnHover ? () => (hovered = true) : undefined}
		on:mouseleave={showLabelOnHover ? () => (hovered = false) : undefined}
	>
		<Thumb
			{max}
			{min}
			value={$_value}
			dragging={$isActive}
			{position}
			{color}
			{size}
			label={_label}
			on:change={(ev) => {
				console.log("thumb", {ev});
			}}
			on:mousedown={handleThumbMouseDown}
			bind:ref={thumb}
			{labelAlwaysOn}
			{classNames}
			{styles}
			{thumbLabel}
			showLabelOnHover={showLabelOnHover && hovered}
		>
			<slot />
		</Thumb>
	</Track>

	<input type="hidden" name={name} value={$_value} />
</SliderRoot>
