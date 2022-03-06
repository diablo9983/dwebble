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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-border-outer" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <rect x="4" y="4" width="16" height="16" rx="2" />   <line x1="12" y1="8" x2="12" y2="8.01" />   <line x1="8" y1="12" x2="8" y2="12.01" />   <line x1="12" y1="12" x2="12" y2="12.01" />   <line x1="16" y1="12" x2="16" y2="12.01" />   <line x1="12" y1="16" x2="12" y2="16.01" /> </svg>