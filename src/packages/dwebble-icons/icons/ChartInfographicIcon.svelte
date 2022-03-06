<script>
	export let color = "currentColor";
	export let strokeWidth = 2;
	export let size = 24;
	export let width = undefined;
	export let height = undefined;
	
	let iconWidth, iconHeight;
	$: if (size || width || height) {
		iconWidth = (width || size + "px");
		iconHeight = (width || size + "px");
	}
</script>

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chart-infographic" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <circle cx="7" cy="7" r="4" />   <path d="M7 3v4h4" />   <line x1="9" y1="17" x2="9" y2="21" />   <line x1="17" y1="14" x2="17" y2="21" />   <line x1="13" y1="13" x2="13" y2="21" />   <line x1="21" y1="12" x2="21" y2="21" /> </svg>