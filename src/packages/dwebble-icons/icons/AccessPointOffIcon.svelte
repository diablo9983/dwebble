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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-access-point-off" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <line x1="3" y1="3" x2="21" y2="21" />   <path d="M14.828 9.172a4 4 0 0 1 1.172 2.828" />   <path d="M17.657 6.343a8 8 0 0 1 1.635 8.952" />   <path d="M9.168 14.828a4 4 0 0 1 0 -5.656" />   <path d="M6.337 17.657a8 8 0 0 1 0 -11.314" /> </svg>