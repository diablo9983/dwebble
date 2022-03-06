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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-git-compare" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <circle cx="6" cy="6" r="2" />   <circle cx="18" cy="18" r="2" />   <path d="M11 6h5a2 2 0 0 1 2 2v8" />   <polyline points="14 9 11 6 14 3" />   <path d="M13 18h-5a2 2 0 0 1 -2 -2v-8" />   <polyline points="10 15 13 18 10 21" /> </svg>