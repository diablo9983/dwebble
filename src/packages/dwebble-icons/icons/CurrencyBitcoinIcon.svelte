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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-bitcoin" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <path d="M6 6h8a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-8" />   <line x1="8" y1="6" x2="8" y2="18" />   <line x1="8" y1="12" x2="14" y2="12" />   <line x1="9" y1="3" x2="9" y2="6" />   <line x1="13" y1="3" x2="13" y2="6" />   <line x1="9" y1="18" x2="9" y2="21" />   <line x1="13" y1="18" x2="13" y2="21" /> </svg>