<script>
	export let color = "currentColor";
	export let strokeWidth = 2;
	export let size = 24;
	export let width = undefined;
	export let height = undefined;
	
	let iconWidth, iconHeight;
	$: if (size || width || height) {
		iconWidth = (width || size) + "px";
		iconHeight = (height || size) + "px";
	}
</script>

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-h-5" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <path d="M17 18h2a2 2 0 1 0 0 -4h-2v-4h4" />   <path d="M4 6v12" />   <path d="M12 6v12" />   <path d="M11 18h2" />   <path d="M3 18h2" />   <path d="M4 12h8" />   <path d="M3 6h2" />   <path d="M11 6h2" /> </svg>