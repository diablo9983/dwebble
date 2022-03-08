<script lang="ts">
	import {SvelteComponent} from "svelte";
	import {CSSProperties} from "@emotion/serialize";
	import {extractMargins} from "@dwebble/styles";
	import {BoxSx, useSx} from "./use-sx.js";

	export let component: SvelteComponent|null = null;

	/* Shared Props */
	/* Component style */
	export let style: CSSProperties|null = null;

	/* Component root element style */
	export let sx: BoxSx = {};

	export let ref = null;

	/* Component additional class name */
	let className = "";
	export { className as class };

	/* Component margins */
	const { margins, rest } = extractMargins($$restProps);
	/* Shared props end */

	let componentClass;
	$: componentClass = useSx(sx, margins, className);
</script>

{#if component}
	<svelte:component
		on:keydown
		on:keyup
		on:mouseup
		on:mousedown
		on:click
		this={component}
		class={componentClass}
		style={style}
		{...rest}
	>
		<slot />
	</svelte:component>
{:else}
	<div
		on:keydown
		on:keyup
		on:mouseup
		on:mousedown
		on:click
		bind:this={ref}
		class={componentClass}
		style={style}
		{...rest}
	>
		<slot />
	</div>
{/if}
