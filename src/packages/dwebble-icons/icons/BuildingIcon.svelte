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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-building" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <line x1="3" y1="21" x2="21" y2="21" />   <line x1="9" y1="8" x2="10" y2="8" />   <line x1="9" y1="12" x2="10" y2="12" />   <line x1="9" y1="16" x2="10" y2="16" />   <line x1="14" y1="8" x2="15" y2="8" />   <line x1="14" y1="12" x2="15" y2="12" />   <line x1="14" y1="16" x2="15" y2="16" />   <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" /> </svg>