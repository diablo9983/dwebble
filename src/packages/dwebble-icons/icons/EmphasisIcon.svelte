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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-emphasis" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <path d="M16 5h-8v10h8m-1 -5h-7" />   <line x1="6" y1="20" x2="6" y2="20.01" />   <line x1="10" y1="20" x2="10" y2="20.01" />   <line x1="14" y1="20" x2="14" y2="20.01" />   <line x1="18" y1="20" x2="18" y2="20.01" /> </svg>