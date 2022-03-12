<script lang="ts">
	import {TextInput} from "../TextInput/index.js";
	import type {NumberInputFormatter, NumberInputParser} from "./NumberInput.types";
	import {DwebbleNumberSize, DwebbleSize, ProviderStyles, useDwebbleContext, useDwebbleTheme} from "@dwebble/styles";
	import useStyles from "./NumberInput.styles";
	import {InputVariant} from "../Input";
	import {createEventDispatcher, onMount} from "svelte";
	import {clamp} from "../../hooks/utils/clamp";
	import {CONTROL_SIZES} from "./NumberInput.styles.js";

	const defaultFormatter: NumberInputFormatter = (value) => value || '';
	const defaultParser: NumberInputParser = (num) => {
		const parsedNum = parseFloat(num);

		if (Number.isNaN(parsedNum)) {
			return undefined;
		}

		return num;
	};

	/** Input value for controlled variant */
	export let value: number | undefined = undefined;

	/** The decimal separator */
	export let decimalSeparator = "";

	/** Maximum possible value */
	export let max: number | null = null;

	/** Minimal possible value */
	export let min: number | null = null;

	/** Number by which value will be incremented/decremented with controls and up/down arrows */
	export let step = 1;

	/** Delay before stepping the value. Can be a number of milliseconds or a function that receives the current step count and returns the delay in milliseconds. */
	export let stepHoldInterval: number | ((stepCount: number) => number) | undefined = undefined;

	/** Initial delay in milliseconds before stepping the value. */
	export let stepHoldDelay: number | undefined = undefined;

	/** Removes increment/decrement controls */
	export let hideControls = false;

	/** Amount of digits after the decimal point  */
	export let precision = 0;

	/** Prevent value clamp on blur */
	export let noClampOnBlur = false;

	export const handlersRef = { increment: () => {}, decrement: () => {} };

	/** Formats the number into the input */
	export let formatter: NumberInputFormatter = defaultFormatter;

	/** Parsers the value from formatter, should be used with formatter at the same time */
	export let parser: NumberInputParser = defaultParser;

	/* Input border-radius from theme or number to set border-radius in px */
	export let radius: DwebbleNumberSize = "sm";

	/* Input size */
	export let size: DwebbleSize = "sm";

	/* Defines input appearance, defaults to default in light color scheme and filled in dark */
	export let variant: InputVariant = "default";

	/* Disabled input state */
	export let disabled = false;

	export let inputRef: HTMLInputElement | null = null;

	/* Shared Props */
	/* Additional class names */
	export let classNames: Partial<Record<string, string>> = {};

	/* Component Styles API style */
	export let styles: ProviderStyles = {};

	const dispatch = createEventDispatcher();

	let focused = false;
	let _value = typeof value === "number" ? value : undefined;
	let finalValue = typeof value === "number" ? value : _value;
	let tempValue = typeof finalValue === "number" ? finalValue.toFixed(precision) : "";

	const incrementHandler = () => {
		if (Number.isNaN(_value)) {
			_value = undefined;
		}
		if (_value === undefined) {
			handleValueChange(min ?? 0);
			tempValue = min?.toFixed(precision) ?? '0';
		} else {
			const result = clamp({ value: _value + step, min: _min, max: _max }).toFixed(precision);

			handleValueChange(parseFloat(result));
			tempValue = result;
		}
	};

	const decrementHandler = () => {
		if (Number.isNaN(_value)) {
			_value = undefined;
		}
		if (_value === undefined) {
			handleValueChange(min ?? 0);
			tempValue = min?.toFixed(precision) ?? '0';
		} else {
			const result = clamp({ value: _value - step, min: _min, max: _max }).toFixed(precision);
			handleValueChange(parseFloat(result));
			tempValue = result;
		}
	};

	Object.assign(handlersRef, { increment: incrementHandler, decrement: decrementHandler });

	const handleValueChange = (val: number | undefined) => {
		dispatch("change", {
			value: val
		});
		_value = val;
	}

	const formatNum = (val: string | number = '') => {
		let parsedStr = typeof val === 'number' ? String(val) : val;

		if (decimalSeparator) {
			parsedStr = parsedStr.replace(/\./g, decimalSeparator);
		}

		return formatter(parsedStr);
	};

	const parseNum = (val: string): string | undefined => {
		let num = val;

		if (decimalSeparator) {
			num = num.replace(new RegExp(`\\${decimalSeparator}`, 'g'), '.');
		}

		return parser(num);
	};

	const _min = typeof min === 'number' ? min : -Infinity;
	const _max = typeof max === 'number' ? max : Infinity;
	let onStepTimeoutRef = null;
	let stepCountRef = 0;

	let shouldUseStepInterval = stepHoldDelay !== undefined && stepHoldInterval !== undefined;

	const onStepDone = () => {
		if (onStepTimeoutRef) {
			window.clearTimeout(onStepTimeoutRef);
		}
		onStepTimeoutRef = null;
		stepCountRef = 0;
	};

	const onStepHandleChange = (isIncrement: boolean) => {
		if (isIncrement) {
			incrementHandler();
		} else {
			decrementHandler();
		}
		stepCountRef += 1;
	};

	const onStepLoop = (isIncrement: boolean) => {
		onStepHandleChange(isIncrement);

		if (shouldUseStepInterval) {
			const interval =
				typeof stepHoldInterval === 'number'
					? stepHoldInterval
					: stepHoldInterval(stepCountRef);
			onStepTimeoutRef = window.setTimeout(() => onStepLoop(isIncrement), interval);
		}
	};

	const onStep = (
		event: MouseEvent | KeyboardEvent,
		isIncrement: boolean
	) => {
		event.preventDefault();
		onStepHandleChange(isIncrement);
		if (shouldUseStepInterval) {
			onStepTimeoutRef = window.setTimeout(() => onStepLoop(isIncrement), stepHoldDelay);
		}
		inputRef?.focus();
	};

	const handleChange = (event: InputEvent) => {
		const { target }: { target: HTMLInputElement } = event;
		const val = target.value;
		const parsed = parseNum(val);

		tempValue = parsed;

		if (val === '') {
			handleValueChange(undefined);
		} else {
			val.trim() !== '' && !Number.isNaN(parsed) && handleValueChange(parseFloat(parsed));
		}
	};

	const handleBlur = (event: InputEvent) => {
		const { target }: { target: HTMLInputElement } = event;
		if (target.value === '') {
			tempValue = '';
			handleValueChange(undefined);
		} else {
			const parsedVal = parseNum(target.value);
			const val = clamp({ value: parseFloat(parsedVal), min: _min, max: _max });

			if (!Number.isNaN(val)) {
				if (!noClampOnBlur) {
					tempValue = val.toFixed(precision);
					handleValueChange(parseFloat(val.toFixed(precision)));
				}
			} else {
				tempValue = finalValue?.toFixed(precision) ?? '';
			}
		}

		focused = false;
		dispatch("blur");
	};

	const handleFocus = () => {
		focused = true;
		dispatch("focus");
	};

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.repeat && shouldUseStepInterval) {
			event.preventDefault();
			return;
		}

		if (event.key === 'ArrowUp') {
			onStep(event, true);
		} else if (event.key === 'ArrowDown') {
			onStep(event, false);
		}
	};

	const handleKeyUp = (event: KeyboardEvent) => {
		if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
			onStepDone();
		}
	};

	onMount(() => {
		onStepDone();
	});

	let classes, cx;
	let theme = useDwebbleTheme();
	const { dwebbleTheme, dwebbleStyles } = useDwebbleContext();

	$: if ($dwebbleTheme || $dwebbleStyles) {
		const elementStyles = useStyles(
			{radius, size},
			{classNames, styles, name: 'NumberInput'}
		);
		classes = elementStyles.classes;
		cx = elementStyles.cx;
		theme = elementStyles.theme;
	}

	$: shouldUseStepInterval = stepHoldDelay !== undefined && stepHoldInterval !== undefined;

	$: if (tempValue === undefined && inputRef) {
		tempValue = "";
		inputRef.value = "";
	}
</script>

<TextInput
	{...$$restProps}
	{variant}
	value={formatNum(tempValue)}
	{disabled}
	bind:ref={inputRef}
	type="text"
	on:input={handleChange}
	on:blur={handleBlur}
	on:focus={handleFocus}
	on:keydown={handleKeyDown}
	on:keyup={handleKeyUp}
	rightSectionWidth={theme.fn.size({ size, sizes: CONTROL_SIZES }) + 1}
	radius={radius}
	max={max}
	min={min}
	step={step}
	size={size}
	styles={styles}
	classNames={classNames}
	inputMode={Number.isInteger(step) && precision === 0 ? 'numeric' : 'decimal'}
	__staticSelector="NumberInput"
>
	<svelte:fragment slot="rightSection">
		<slot name="rightSection">
			{#if !disabled && !hideControls && variant !== "unstyled"}
				<div class={classes.rightSection}>
					<button
						type="button"
						tabIndex={-1}
						aria-hidden="true"
						disabled={finalValue >= max}
						class={cx(classes.control, classes.controlUp)}
						on:mousedown={(event) => onStep(event, true)}
						on:mouseup={onStepDone}
						on:mouseleave={onStepDone}></button>
					<button
						type="button"
						tabIndex={-1}
						aria-hidden="true"
						disabled={finalValue <= min}
						class={cx(classes.control, classes.controlDown)}
						on:mousedown={(event) => onStep(event, false)}
						on:mouseup={onStepDone}
						on:mouseleave={onStepDone}></button>
				</div>
			{/if}
		</slot>
	</svelte:fragment>
</TextInput>
