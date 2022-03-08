<script lang="ts">
	import {DwebbleColor, DwebbleSize, ProviderStyles, useDwebbleContext} from "@dwebble/styles";
	import useStyles from "./Marks.styles";
	import Box from "../../Box/Box.svelte";
	import {getPosition} from "../utils/get-position.js";
	import {isMarkFilled} from "./is-mark-filled.js";
	import {createEventDispatcher} from "svelte";

	export let marks: { value: number, label?: string }[] = [];
	export let color: DwebbleColor = "primary";
	export let size: DwebbleSize = "sm";
	export let min;
	export let max;
	export let value;
	export let offset;

	/* Additional class names */
	export let classNames: Partial<Record<string, string>> = {};

	/* Component Styles API style */
	export let styles: ProviderStyles = {};

	const dispatch = createEventDispatcher();
	const handleMove = (event, mark) => {
		event.stopPropagation();
		dispatch("change", { value: mark.value });
	}

	let classes, cx;
	const { dwebbleTheme, dwebbleStyles } = useDwebbleContext();
	$: if ($dwebbleTheme || $dwebbleStyles) {
		const elementStyles = useStyles({size, color}, {classNames, styles, name: 'Slider'});
		classes = elementStyles.classes;
		cx = elementStyles.cx;
	}
</script>

<div>
	{#each marks as mark}
		<Box
			class={classes.markWrapper}
			sx={{
				left: `${getPosition({ value: mark.value, min, max })}%`
			}}
		>
			<div
				class={cx(classes.mark, {
					[classes.markFilled]: isMarkFilled({ mark, value, offset })
				})}
			>
				{#if mark.label}
					<div
						class={classes.markLabel}
						on:mousedown={(event) => handleMove(event, mark)}
						on:touchstart={(event) => handleMove(event, mark)}
					>
						{mark.label}
					</div>
				{/if}
			</div>
		</Box>
	{/each}
</div>
