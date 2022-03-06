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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-section" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <path d="M20 20h.01" />   <path d="M4 20h.01" />   <path d="M8 20h.01" />   <path d="M12 20h.01" />   <path d="M16 20h.01" />   <path d="M20 4h.01" />   <path d="M4 4h.01" />   <path d="M8 4h.01" />   <path d="M12 4h.01" />   <path d="M16 4l0 0" />   <rect x="4" y="8" width="16" height="8" rx="1" /> </svg>