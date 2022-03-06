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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ball-basketball" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <circle cx="12" cy="12" r="9" />   <line x1="5.65" y1="5.65" x2="18.35" y2="18.35" />   <line x1="5.65" y1="18.35" x2="18.35" y2="5.65" />   <path d="M12 3a9 9 0 0 0 9 9" />   <path d="M3 12a9 9 0 0 1 9 9" /> </svg>