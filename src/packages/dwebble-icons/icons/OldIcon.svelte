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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-old" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <path d="M11 21l-1 -4l-2 -3v-6" />   <path d="M5 14l-1 -3l4 -3l3 2l3 .5" />   <circle cx="8" cy="4" r="1" />   <path d="M7 17l-2 4" />   <path d="M16 21v-8.5a1.5 1.5 0 0 1 3 0v.5" /> </svg>