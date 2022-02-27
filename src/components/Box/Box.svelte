<script lang="ts">
	import {SvelteComponent} from "svelte";
	import {CSSProperties} from "@emotion/serialize";
	import type {CSSObject, DwebbleTheme} from "../../styles/src";
	import {extractMargins} from "../../styles/src";
	import {useSx} from "./use-sx.js";

	export let component: SvelteComponent|null = null;

	/* Shared Props */
	/* Component style */
	export let style: CSSProperties|null = null;

	/* Component root element style */
	export let sx: CSSObject | ((theme: DwebbleTheme) => CSSObject) = {};

	/* Component additional class name */
	let className = "";
	export { className as class };

	/* Component margins */
	const { margins, rest } = extractMargins($$restProps);
	/* Shared props end */
</script>

{#if component}
	<svelte:component this={component} class={useSx(sx, margins, className)} style={style} {...rest}>
		<slot />
	</svelte:component>
{:else}
	<div class={useSx(sx, margins, className)} style={style} {...rest}>
		<slot />
	</div>
{/if}
