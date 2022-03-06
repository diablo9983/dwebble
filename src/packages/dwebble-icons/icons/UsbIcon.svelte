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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-usb" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <circle cx="12" cy="19" r="2" />   <path d="M12 17v-11.5" />   <path d="M7 10v3l5 3" />   <path d="M12 14.5l5 -2v-2.5" />   <path d="M16 10h2v-2h-2z" />   <circle cx="7" cy="9" r="1" />   <path d="M10 5.5h4l-2 -2.5z" /> </svg>