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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chart-radar" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <path d="M12 3l9.5 7l-3.5 11h-12l-3.5 -11z" />   <path d="M12 7.5l5.5 4l-2.5 5.5h-6.5l-2 -5.5z" />   <path d="M2.5 10l9.5 3l9.5 -3" />   <path d="M12 3v10l6 8" />   <path d="M6 21l6 -8" /> </svg>