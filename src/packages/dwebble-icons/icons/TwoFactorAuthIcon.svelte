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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-2fa" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <path d="M7 16h-4l3.47 -4.66a2 2 0 1 0 -3.47 -1.54" />   <path d="M10 16v-8h4" />   <line x1="10" y1="12" x2="13" y2="12" />   <path d="M17 16v-6a2 2 0 0 1 4 0v6" />   <line x1="17" y1="13" x2="21" y2="13" /> </svg>