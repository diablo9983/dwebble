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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-keyboard-off" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <path d="M18 18h-14a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2m4 0h10a2 2 0 0 1 2 2v8c0 .554 -.226 1.056 -.59 1.418" />   <line x1="6" y1="10" x2="6" y2="10.01" />   <line x1="10" y1="10" x2="10" y2="10.01" />   <line x1="14" y1="10" x2="14" y2="10.01" />   <line x1="18" y1="10" x2="18" y2="10.01" />   <line x1="6" y1="14" x2="6" y2="14.01" />   <line x1="18" y1="14" x2="18" y2="14.01" />   <line x1="10" y1="14" x2="14" y2="14" />   <line x1="3" y1="3" x2="21" y2="21" /> </svg>