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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-face-id" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />   <path d="M4 16v2a2 2 0 0 0 2 2h2" />   <path d="M16 4h2a2 2 0 0 1 2 2v2" />   <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />   <line x1="9" y1="10" x2="9.01" y2="10" />   <line x1="15" y1="10" x2="15.01" y2="10" />   <path d="M9.5 15a3.5 3.5 0 0 0 5 0" /> </svg>