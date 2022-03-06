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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-barcode" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <path d="M4 7v-1a2 2 0 0 1 2 -2h2" />   <path d="M4 17v1a2 2 0 0 0 2 2h2" />   <path d="M16 4h2a2 2 0 0 1 2 2v1" />   <path d="M16 20h2a2 2 0 0 0 2 -2v-1" />   <rect x="5" y="11" width="1" height="2" />   <line x1="10" y1="11" x2="10" y2="13" />   <rect x="14" y="11" width="1" height="2" />   <line x1="19" y1="11" x2="19" y2="13" /> </svg>