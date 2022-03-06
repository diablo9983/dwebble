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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-tidal" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <path d="M12 7l-2.5 2.5l2.5 2.5l2.5 -2.5z" />   <path d="M12 14l-2.5 2.5l2.5 2.5l2.5 -2.5z" />   <path d="M19 7l-2.5 2.5l2.5 2.5l2.5 -2.5z" />   <path d="M5 7l-2.5 2.5l2.5 2.5l2.5 -2.5z" /> </svg>