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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-businessplan" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>     <ellipse cx="16" cy="6" rx="5" ry="3" />   <path d="M11 6v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />   <path d="M11 10v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />   <path d="M11 14v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />   <path d="M7 9h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />   <path d="M5 15v1m0 -8v1" /> </svg>