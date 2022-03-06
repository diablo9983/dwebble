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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-dashed" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95" />   <path d="M3.69 8.56a9 9 0 0 0 -.69 3.44" />   <path d="M3.69 15.44a9 9 0 0 0 1.95 2.92" />   <path d="M8.56 20.31a9 9 0 0 0 3.44 .69" />   <path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95" />   <path d="M20.31 15.44a9 9 0 0 0 .69 -3.44" />   <path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92" />   <path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69" /> </svg>