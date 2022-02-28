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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-aperture" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <circle cx="12" cy="12" r="9" />   <line x1="3.6" y1="15" x2="14.15" y2="15" />   <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(72 12 12)" />   <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(144 12 12)" />   <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(216 12 12)" />   <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(288 12 12)" /> </svg>