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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-medium" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <rect x="4" y="4" width="16" height="16" rx="2" />   <path d="M8 9h1l3 3l3 -3h1" />   <line x1="8" y1="15" x2="10" y2="15" />   <line x1="14" y1="15" x2="16" y2="15" />   <line x1="9" y1="9" x2="9" y2="15" />   <line x1="15" y1="9" x2="15" y2="15" /> </svg>