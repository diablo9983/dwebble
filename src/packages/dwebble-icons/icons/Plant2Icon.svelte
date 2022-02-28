<script>
	export let color = "currentColor";
	export let strokeWidth = 2;
	export let size = 24;
	export let width;
	export let height;
	
	let iconWidth, iconHeight;
	$: if (size || width || height) {
		iconWidth = (width || size + "px");
		iconHeight = (width || size + "px");
	}
</script>

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plant-2" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <path d="M2 9a10 10 0 1 0 20 0" />   <path d="M12 19a10 10 0 0 1 10 -10" />   <path d="M2 9a10 10 0 0 1 10 10" />   <path d="M12 4a9.7 9.7 0 0 1 2.99 7.5" />   <path d="M9.01 11.5a9.7 9.7 0 0 1 2.99 -7.5" /> </svg>