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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-share" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <circle cx="6" cy="12" r="3" />   <circle cx="18" cy="6" r="3" />   <circle cx="18" cy="18" r="3" />   <line x1="8.7" y1="10.7" x2="15.3" y2="7.3" />   <line x1="8.7" y1="13.3" x2="15.3" y2="16.7" /> </svg>