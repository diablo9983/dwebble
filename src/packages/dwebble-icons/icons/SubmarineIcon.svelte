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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-submarine" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <path d="M3 11v6h2l1 -1.5l3 1.5h10a3 3 0 0 0 0 -6h-10h0l-3 1.5l-1 -1.5h-2z" />   <path d="M17 11l-1 -3h-5l-1 3" />   <path d="M13 8v-2a1 1 0 0 1 1 -1h1" /> </svg>