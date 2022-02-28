<script>
	export let color = "currentColor";
	export let strokeWidth = 2;
	export let size = 24;
	export let width;
	export let height;
	
	let iconWidth, iconHeight;
	$: if (size || width || height) {
		iconWidth = (width || size + "px");
		iconHeight = (width || size + "px");
	}
</script>

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-up-lines" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <path d="M9 12h-3.586a1 1 0 0 1 -.707 -1.707l6.586 -6.586a1 1 0 0 1 1.414 0l6.586 6.586a1 1 0 0 1 -.707 1.707h-3.586v3h-6v-3z" />   <path d="M9 21h6" />   <path d="M9 18h6" /> </svg>