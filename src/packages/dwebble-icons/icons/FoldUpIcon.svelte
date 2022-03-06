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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-fold-up" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <path d="M12 13v-8l-3 3m6 0l-3 -3" />   <line x1="9" y1="17" x2="10" y2="17" />   <line x1="14" y1="17" x2="15" y2="17" />   <line x1="19" y1="17" x2="20" y2="17" />   <line x1="4" y1="17" x2="5" y2="17" /> </svg>