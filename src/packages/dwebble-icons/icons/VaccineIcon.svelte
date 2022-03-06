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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-vaccine" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <path d="M17 3l4 4" />   <path d="M19 5l-4.5 4.5" />   <path d="M11.5 6.5l6 6" />   <path d="M16.5 11.5l-6.5 6.5h-4v-4l6.5 -6.5" />   <path d="M7.5 12.5l1.5 1.5" />   <path d="M10.5 9.5l1.5 1.5" />   <path d="M3 21l3 -3" /> </svg>