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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-atom-2" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <circle cx="12" cy="12" r="3" />   <line x1="12" y1="21" x2="12" y2="21.01" />   <line x1="3" y1="9" x2="3" y2="9.01" />   <line x1="21" y1="9" x2="21" y2="9.01" />   <path d="M8 20.1a9 9 0 0 1 -5 -7.1" />   <path d="M16 20.1a9 9 0 0 0 5 -7.1" />   <path d="M6.2 5a9 9 0 0 1 11.4 0" /> </svg>