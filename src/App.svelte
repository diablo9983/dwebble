<script lang="ts">
	/**************/
	/* PLAYGROUND */
	/**************/

	import {DwebbleProvider} from "@dwebble/styles";
	import type {DwebbleTheme} from "@dwebble/styles";
	import TextInput from "./components/TextInput/TextInput.svelte";
	import PasswordInput from "./components/PasswordInput/PasswordInput.svelte";
	import Slider from "./components/Slider/Slider/Slider.svelte";
	import Button from "./components/Button/Button.svelte";

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
		<Button on:click={() => setScheme("light")} disabled={!theme.colorScheme || theme.colorScheme === "light"}>Light</Button>
		<Button on:click={() => setScheme("dark")} disabled={theme.colorScheme === "dark"}>Dark</Button>
		<hr>
	</main>

	<div>
		<TextInput label="Text Input" />
		<PasswordInput label="Password Input" />
		<p>Slider</p>
		<Slider marks={[
			{ value: 20, label: '20%' },
			{ value: 50, label: '50%' },
			{ value: 80, label: '80%' },
		]} />
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
