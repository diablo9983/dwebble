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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-text-resize" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <circle cx="5" cy="5" r="2" />   <circle cx="19" cy="5" r="2" />   <circle cx="5" cy="19" r="2" />   <circle cx="19" cy="19" r="2" />   <path d="M5 7v10" />   <path d="M7 5h10" />   <path d="M7 19h10" />   <path d="M19 7v10" />   <path d="M10 10h4" />   <path d="M12 14v-4" /> </svg>