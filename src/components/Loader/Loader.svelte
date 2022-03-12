<script lang="ts">
	import type {DwebbleColor, DwebbleNumberSize, DwebbleTheme} from "@dwebble/styles";
	import {useDwebbleTheme} from "@dwebble/styles";
	import {LOADERS, LOADER_SIZES} from "./Loader.styles";

	const theme = useDwebbleTheme();

	export let size: DwebbleNumberSize = "md";
	export let color: DwebbleColor = theme.primaryColor;
	export let variant: DwebbleTheme['loader'] = "bars";

	let defaultLoader, _color;
	$: defaultLoader = variant in LOADERS ? variant : theme.loader;
	$: _color = color || theme.primaryColor;
</script>

<svelte:component
	role="presentation"
	this={LOADERS[defaultLoader] || LOADERS.bars}
	size={theme.fn.size({size, sizes:LOADER_SIZES})}
	color={
		_color in theme.colors
			? theme.fn.themeColor(_color, theme.colorScheme === "dark" ? 4 : 0)
			: color
	}
	{...$$restProps}
/>
