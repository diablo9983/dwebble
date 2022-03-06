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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-barrier-block" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <rect x="4" y="7" width="16" height="9" rx="1" />   <path d="M7 16v4" />   <path d="M7.5 16l9 -9" />   <path d="M13.5 16l6.5 -6.5" />   <path d="M4 13.5l6.5 -6.5" />   <path d="M17 16v4" />   <path d="M5 20h4" />   <path d="M15 20h4" />   <path d="M17 7v-2" />   <path d="M7 7v-2" /> </svg>