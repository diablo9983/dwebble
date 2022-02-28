<script lang="ts">
	import useStyles, {heights} from './Button.styles';
	import {getSharedColorScheme, useDwebbleContext} from "../../packages/dwebble-styles/src";
	import {Loader} from "../Loader";
	import type { ButtonVariant } from "./Button.types";
	import type {DwebbleColor, DwebbleSize} from "../../packages/dwebble-styles/src";
	import type {LoaderProps} from "../Loader";

	export let type = "button";
	export let variant: ButtonVariant = "filled";
	export let radius: DwebbleSize = "sm";
	export let color: DwebbleColor = "primary";
	export let size: DwebbleSize = "sm";
	export let fullWidth: boolean = false;
	export let compact: boolean = false;
	export let disabled: boolean = false;
	export let loading: boolean = false;
	export let uppercase: boolean = false;
	export let loaderPosition: "left" | "right" = "left";
	export let classNames: string = "";
	export let styles = {};
	export let loaderProps: Partial<LoaderProps> = {};

	const { dwebbleTheme, dwebbleStyles } = useDwebbleContext();

	let classes, cx, theme;

	$: if ($dwebbleTheme || $dwebbleStyles) {
		const elementStyles = useStyles({
			radius,
			color,
			size,
			fullWidth,
			compact
		}, {
			classNames,
			styles,
			name: "Button"
		});
		classes = elementStyles.classes;
		cx = elementStyles.cx;
		theme = elementStyles.theme;
	}

	const colors = getSharedColorScheme({ color, theme: theme || $dwebbleTheme, variant });
</script>

<button
	class={cx(classes[variant], { [classes.loading]: loading }, classes.root )}
	{type}
	disabled={disabled || loading}
	{...$$restProps}
>
	<span class={classes.inner}>
		{#if $$slots.leftIcon || (loading && loaderPosition === "left")}
			<span class={cx(classes.icon, classes.leftIcon)}>
				{#if loading}
					<Loader color={colors.color} size={theme.fn.size({size, sizes: heights}) / 2} {...loaderProps} />
				{/if}
			</span>
		{/if}

		<span class={classes.label} style={{ textTransform: uppercase ? "uppercase" : undefined }}>
			<slot />
		</span>

		{#if $$slots.rightIcon || (loading && loaderPosition === "right")}
			<span class={cx(classes.icon, classes.rightIcon)}>
				{#if loading}
					<Loader color={colors.color} size={theme.fn.size({size, sizes: heights}) / 2} {...loaderProps} />\
				{/if}
			</span>
		{/if}
	</span>
</button>
