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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-router" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <rect x="3" y="13" width="18" height="8" rx="2" />   <line x1="17" y1="17" x2="17" y2="17.01" />   <line x1="13" y1="17" x2="13" y2="17.01" />   <line x1="15" y1="13" x2="15" y2="11" />   <path d="M11.75 8.75a4 4 0 0 1 6.5 0" />   <path d="M8.5 6.5a8 8 0 0 1 13 0" /> </svg>