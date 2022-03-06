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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrows-shuffle-2" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <path d="M18 4l3 3l-3 3" />   <path d="M18 20l3 -3l-3 -3" />   <path d="M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5" />   <path d="M3 17h3a5 5 0 0 0 5 -5a5 5 0 0 1 5 -5h5" /> </svg>