<script lang="ts">
	/**************/
	/* PLAYGROUND */
	/**************/

	import {DWEBBLE_COLORS, DwebbleProvider} from "./styles/src";
	import type {DwebbleTheme} from "./styles/src";
	import TextInput from "./components/TextInput/TextInput.svelte";

	export let name: string;

	let theme: Partial<DwebbleTheme> = {
		colors: {
			"ocean-dark": ["#E9EEF8", "#BCCCEA", "#94AEDE", "#7294D3", "#537DC9", "#3B6ABE", "#345DA7", "#2D5090", "#26457C", "#213B6A"]
		}
	}

	const setScheme = scheme => {
		theme = {
			...theme,
			colorScheme: scheme
		}
	}

	const variants = ['light', 'outline', 'subtle', 'default'];
</script>

<DwebbleProvider {theme}>
	<main>
		<h1>Hello {name}!</h1>
		<button disabled={!theme.colorScheme || theme.colorScheme === "light"} on:click={() => setScheme("light")}>Light</button>
		<button disabled={theme.colorScheme === "dark"} on:click={() => setScheme("dark")}>Dark</button>
		<hr>
	</main>

	<div>
		<TextInput label="Text Input" />
	</div>
</DwebbleProvider>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	div {
		padding: 1em;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
