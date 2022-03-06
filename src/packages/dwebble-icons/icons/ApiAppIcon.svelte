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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-api-app" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <path d="M12 15h-6.5a2.5 2.5 0 1 1 0 -5h.5" />   <path d="M15 12v6.5a2.5 2.5 0 1 1 -5 0v-.5" />   <path d="M12 9h6.5a2.5 2.5 0 1 1 0 5h-.5" />   <path d="M9 12v-6.5a2.5 2.5 0 0 1 5 0v.5" /> </svg>