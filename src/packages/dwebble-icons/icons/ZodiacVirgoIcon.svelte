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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zodiac-virgo" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <path d="M3 4a2 2 0 0 1 2 2v9" />   <path d="M5 6a2 2 0 0 1 4 0v9" />   <path d="M9 6a2 2 0 0 1 4 0v10a7 5 0 0 0 7 5" />   <path d="M12 21a7 5 0 0 0 7 -5v-2a3 3 0 0 0 -6 0" /> </svg>