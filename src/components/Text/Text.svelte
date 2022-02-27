<script lang="ts">
	import type {DwebbleColor, DwebbleSize} from "../../styles/src";
	import type {Properties} from "csstype";
	import type {DwebbleGradient} from "../../styles/src/theme/utils/get-shared-color-scheme";
	import {ProviderStyles} from "../../styles/src/theme/types/DwebbleProvider";
	import Box from "../Box/Box.svelte";
	import {useDwebbleContext} from "../../styles/src";
	import useStyles from "../Text/Text.styles";

	/* Predefined font-size from theme.fontSizes */
	export let size: DwebbleSize = "sm";

	/* Text color from theme */
	export let color: DwebbleColor = "";

	/* Sets font-weight css property */
	export let weight: Properties['fontWeight'] = "inherit";

	/* Sets text-transform css property */
	export let transform: "capitalize" | "uppercase" | "lowercase" | "none" = "none";

	/* Sets text-align css property */
	export let align: "left" | "center" | "right" | "justify" = "left";

	/* Link or text variant */
	export let variant: "text" | "link" | "gradient" = "text";

	/* CSS -webkit-line-clamp property */
	export let lineClamp = 0;

	/* Sets line-height to 1 for centering */
	export let inline = false;

	/* Underline the text */
	export let underline = false;

	/* Inherit font properties from parent element */
	export let inherit = false;

	/* Controls gradient settings in gradient variant only */
	export let gradient: DwebbleGradient = { from: 'blue', to: 'cyan', deg: 45 };

	/* Static css selector base */
	export let __staticSelector = "";

	/* Shared Props */
	/* Additional class names */
	export let classNames: Partial<Record<string, string>> = {};

	/* Component Styles API style */
	export let styles: ProviderStyles = {};

	/* Component additional class name */
	let className = "";
	export { className as class };
	/* Shared pops end */

	let classes, cx;
	const { dwebbleTheme, dwebbleStyles } = useDwebbleContext();

	$: if ($dwebbleTheme || $dwebbleStyles) {
		const elementStyles = useStyles(
			{
				variant,
				color,
				size,
				lineClamp,
				inline,
				inherit,
				underline,
				weight,
				transform,
				align,
				gradientFrom: gradient.from,
				gradientTo: gradient.to,
				gradientDeg: gradient.deg,
			},
			{classNames, styles, name: __staticSelector}
		);
		classes = elementStyles.classes;
		cx = elementStyles.cx;
	}
</script>

<Box
	class={cx(classes.root, { [classes.gradient]: variant === "gradient" }, className)}
	{...$$restProps}
>
	<slot />
</Box>
