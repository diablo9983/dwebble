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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-test-pipe" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <path d="M16 4l3 3l-12.35 12.35a1.5 1.5 0 0 1 -3 -3l12.35 -12.35" />   <line x1="10" y1="10" x2="16" y2="10" />   <path d="M19 15l1.5 1.6a2 2 0 1 1 -3 0l1.5 -1.6" /> </svg>