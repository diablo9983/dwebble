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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dimensions" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <path d="M3 5h11" />   <path d="M12 7l2 -2l-2 -2" />   <path d="M5 3l-2 2l2 2" />   <path d="M19 10v11" />   <path d="M17 19l2 2l2 -2" />   <path d="M21 12l-2 -2l-2 2" />   <rect x="3" y="10" width="11" height="11" rx="2" /> </svg>