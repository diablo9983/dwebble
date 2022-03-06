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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-refresh-alert" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />   <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />   <line x1="12" y1="9" x2="12" y2="12" />   <line x1="12" y1="15" x2="12.01" y2="15" /> </svg>