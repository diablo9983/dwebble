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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-components" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <path d="M3 12l3 3l3 -3l-3 -3z" />   <path d="M15 12l3 3l3 -3l-3 -3z" />   <path d="M9 6l3 3l3 -3l-3 -3z" />   <path d="M9 18l3 3l3 -3l-3 -3z" /> </svg>