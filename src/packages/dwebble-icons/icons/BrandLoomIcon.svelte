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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-loom" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <path d="M17.464 6.518a6.001 6.001 0 1 0 -3.023 7.965" />   <path d="M17.482 17.464a6.001 6.001 0 1 0 -7.965 -3.023" />   <path d="M6.54 17.482a6.001 6.001 0 1 0 3.024 -7.965" />   <path d="M6.518 6.54a6.001 6.001 0 1 0 7.965 3.024" /> </svg>