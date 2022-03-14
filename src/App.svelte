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
	import SegmentedControl from "./components/SegmentedControl/SegmentedControl.svelte";
	import NumberInput from "./components/NumberInput/NumberInput.svelte";
	import RadioGroup from "./components/RadioGroup/RadioGroup.svelte";

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

	let checkedRadio = "three";

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
		<TextInput  wrapperProps={{
			label: "Text input",
			description: "Text input description",
			mt: "md"
		}} label="Text Input" />
		<PasswordInput  wrapperProps={{
			label: "Password input",
			description: "Password input description",
			mt: "md"
		}} label="Password Input" />
		<p>Slider</p>
		<Slider marks={[
			{ value: 20, label: '20%' },
			{ value: 50, label: '50%' },
			{ value: 80, label: '80%' },
		]} />

		<p>Segmented Control</p>
		<SegmentedControl data={[
			{ label: 'React', value: 'react' },
			{ label: 'Angular', value: 'ng' },
			{ label: 'Vue', value: 'vue' },
			{ label: 'Svelte', value: 'svelte' },
		]} value="ng" on:change={({ detail }) => {
			console.log({detail});
		}} />

		<NumberInput  wrapperProps={{
			label: "Number input",
			description: "Number input description",
			mt: "md"
		}} placeholder="Enter value" />


		<RadioGroup wrapperProps={{
			label: "Radio group",
			description: "Radio group description",
			mt: "md"
		}} options={[{
			label: "option one",
			value: "one"
		}, {
			label: "option two",
			value: "two"
		}, {
			label: "option three",
			value: "three"
		}]} bind:value={checkedRadio} />
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
