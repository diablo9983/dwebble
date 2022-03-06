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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-battery-automotive" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <rect x="3" y="6" width="18" height="14" rx="2" />   <path d="M6 6v-2" />   <line x1="19" y1="4" x2="19" y2="6" />   <line x1="6.5" y1="13" x2="9.5" y2="13" />   <line x1="14.5" y1="13" x2="17.5" y2="13" />   <line x1="16" y1="11.5" x2="16" y2="14.5" /> </svg>