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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list-check" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <path d="M3.5 5.5l1.5 1.5l2.5 -2.5" />   <path d="M3.5 11.5l1.5 1.5l2.5 -2.5" />   <path d="M3.5 17.5l1.5 1.5l2.5 -2.5" />   <line x1="11" y1="6" x2="20" y2="6" />   <line x1="11" y1="12" x2="20" y2="12" />   <line x1="11" y1="18" x2="20" y2="18" /> </svg>