<script lang="ts">
	import Button from "./components/Button/Button.svelte";
	import DwebbleProvider from "./styles/src/theme/DwebbleProvider.svelte";
	import {DWEBBLE_COLORS, DwebbleTheme} from "./styles/src/index.js";

	export let name: string;

	let theme: Partial<DwebbleTheme> = {
		colorScheme: "dark",
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

	const variants = ['light', 'outline', 'subtle'];
</script>

<DwebbleProvider {theme}>
	<main>
		<h1>Hello {name}!</h1>

		<button on:click={() => setScheme("light")}>Light</button>
		<button on:click={() => setScheme("dark")}>Dark</button>
		<hr>

		{#each DWEBBLE_COLORS.concat(["ocean-dark"]) as color}
			<div style="display: flex; justify-content: center; gap: 10px">
				<Button {color}>
					Filled
				</Button>
				{#each variants as variant}
					<Button {variant} {color}>
						{color}
					</Button>
				{/each}
			</div>
		{/each}
	</main>
</DwebbleProvider>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
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
