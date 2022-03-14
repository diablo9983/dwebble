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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-3d-rotate" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <path d="M7 15.5l4 -2.5" />   <path d="M3 13l4 2.5v4.5l4 -2.5v-4.5l-4 -2.5z" />   <path d="M3 13v4.5l4 2.5" />   <path d="M11 4a7 7 0 0 1 7 7v4l-3 -3" />   <path d="M21 12l-3 3" /> </svg>