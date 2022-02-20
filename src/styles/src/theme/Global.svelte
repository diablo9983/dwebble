<script lang="ts">
	import {Interpolation, serializeStyles} from "@emotion/serialize";
	import {useEmotionCache} from "../tss";
	import {onDestroy} from "svelte";

	export let styles: Record<string, Interpolation<any>> = {};

	const cache = useEmotionCache();
	const container = document.createElement("style");
	container.dataset.emotion = "dwebble-global";
	document.head.appendChild(container);

	const updateStyles = () => {
		[...container.sheet.cssRules].forEach(() => {
			container.sheet.deleteRule(0);
		})
		Object.entries(styles).map(([key, value]) => serializeStyles(
				[{[key]: value} as Interpolation<any>],
				cache.registered,
				null
			)
		).map(({styles}) => container.sheet.insertRule(styles, 0));
	}

	onDestroy(() => container?.remove());

	$: styles && updateStyles();
</script>
