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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-float-right" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <rect width="6" height="6" x="14" y="5" rx="1" />   <line x1="4" y1="7" x2="10" y2="7" />   <line x1="4" y1="11" x2="10" y2="11" />   <line x1="4" y1="15" x2="20" y2="15" />   <line x1="4" y1="19" x2="20" y2="19" /> </svg>