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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-book" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />   <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />   <line x1="3" y1="6" x2="3" y2="19" />   <line x1="12" y1="6" x2="12" y2="19" />   <line x1="21" y1="6" x2="21" y2="19" /> </svg>