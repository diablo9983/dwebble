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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-books" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <rect x="5" y="4" width="4" height="16" rx="1" />   <rect x="9" y="4" width="4" height="16" rx="1" />   <path d="M5 8h4" />   <path d="M9 16h4" />     <g transform="rotate(-13 27.054 -55.827)">   <rect width="4" height="16" rx="1" />   <path d="M0 4h4" />   <path d="M0 12h4" />     </g> </svg>