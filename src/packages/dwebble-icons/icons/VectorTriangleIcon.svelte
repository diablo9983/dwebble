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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-vector-triangle" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <rect x="10" y="4" width="4" height="4" rx="1" />   <rect x="3" y="17" width="4" height="4" rx="1" />   <rect x="17" y="17" width="4" height="4" rx="1" />   <line x1="6.5" y1="17.1" x2="11.5" y2="8" />   <line x1="17.5" y1="17.1" x2="12.5" y2="8" />   <line x1="7" y1="19" x2="17" y2="19" /> </svg>