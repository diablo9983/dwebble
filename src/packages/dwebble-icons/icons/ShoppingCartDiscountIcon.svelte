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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-discount" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <circle cx="6" cy="19" r="2" />   <circle cx="17" cy="19" r="2" />   <path d="M17 17h-11v-14h-2" />   <path d="M20 6l-1 7h-13" />   <path d="M10 10l6 -6" />   <circle cx="10.5" cy="4.5" r=".5" />   <circle cx="15.5" cy="9.5" r=".5" /> </svg>