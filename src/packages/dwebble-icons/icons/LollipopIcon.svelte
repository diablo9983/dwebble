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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-lollipop" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <circle cx="14" cy="10" r="7" />   <path d="M21 10a3.5 3.5 0 0 0 -7 0" />   <path d="M14 10a3.5 3.5 0 0 1 -7 0" />   <path d="M14 17a3.5 3.5 0 0 0 0 -7" />   <path d="M14 3a3.5 3.5 0 0 0 0 7" />   <path d="M3 21l6 -6" /> </svg>