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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ad" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <rect x="3" y="5" width="18" height="14" rx="2" />   <path d="M7 15v-4a2 2 0 0 1 4 0v4" />   <line x1="7" y1="13" x2="11" y2="13" />   <path d="M17 9v6h-1.5a1.5 1.5 0 1 1 1.5 -1.5" /> </svg>