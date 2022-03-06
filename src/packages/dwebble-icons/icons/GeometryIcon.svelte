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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-geometry" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <path d="M7 21l4 -12m2 0l1.48 4.439m.949 2.847l1.571 4.714" />   <circle cx="12" cy="7" r="2" />   <path d="M4 12c1.526 2.955 4.588 5 8 5c3.41 0 6.473 -2.048 8 -5" />   <path d="M12 5v-2" /> </svg>