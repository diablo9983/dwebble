<script lang="ts">
	import Box from "../Box/Box.svelte";
	import {DwebbleNumberSize, ProviderStyles, useDwebbleContext, useDwebbleTheme} from "@dwebble/styles";
	import useStyles from "./Group.styles";
	import type {GroupPosition} from "./Group.types";
	import type {CSSProperties} from "@emotion/serialize";

	/** Defines justify-content property */
	export let position: GroupPosition = "left";

	/** Defined flex-wrap property */
	export let noWrap = false;

	/** Defines flex-grow property for each element, true -> 1, false -> 0 */
	export let grow = false;

	/** Space between elements */
	export let spacing: DwebbleNumberSize = "sm";

	/** Defines flex-direction property, row for horizontal, column for vertical */
	export let direction: 'row' | 'column' = "row";

	/** Defines align-items css property */
	export let align: CSSProperties['alignItems'] = "flex-start";

	/* Shared Props */
	/* Additional class names */
	export let classNames: Partial<Record<string, string>> = {};

	/* Component Styles API style */
	export let styles: ProviderStyles = {};

	/* Component additional class name */
	let className = "";
	export { className as class };
	/* Shared props end */

	let classes, cx;
	let theme = useDwebbleTheme();
	const { dwebbleTheme, dwebbleStyles } = useDwebbleContext();
	$: if ($dwebbleTheme || $dwebbleStyles) {
		const elementStyles = useStyles({
			align,
			grow,
			noWrap,
			spacing,
			position,
			direction
		}, { classNames, styles, name: 'Group' });

		classes = elementStyles.classes;
		cx = elementStyles.cx;
		theme = elementStyles.theme;
	}
</script>

<Box class={cx(classes.root, className)} {...$$restProps}>
	<slot class={cx(classes.child)} />
</Box>
