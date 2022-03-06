<script lang="ts">
	import {EyeIcon, EyeOffIcon} from "../../packages/dwebble-icons/index.js";

	export let reveal = false;
	export let size = 15;
</script>

<svelte:component this={reveal ? EyeOffIcon : EyeIcon} {size} />
