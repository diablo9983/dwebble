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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-keyboard" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <rect x="2" y="6" width="20" height="12" rx="2" />   <line x1="6" y1="10" x2="6" y2="10" />   <line x1="10" y1="10" x2="10" y2="10" />   <line x1="14" y1="10" x2="14" y2="10" />   <line x1="18" y1="10" x2="18" y2="10" />   <line x1="6" y1="14" x2="6" y2="14.01" />   <line x1="18" y1="14" x2="18" y2="14.01" />   <line x1="10" y1="14" x2="14" y2="14" /> </svg>