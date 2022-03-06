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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chart-dots" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <path d="M3 3v18h18" />   <circle cx="9" cy="9" r="2" />   <circle cx="19" cy="7" r="2" />   <circle cx="14" cy="15" r="2" />   <line x1="10.16" y1="10.62" x2="12.5" y2="13.5" />   <path d="M15.088 13.328l2.837 -4.586" /> </svg>