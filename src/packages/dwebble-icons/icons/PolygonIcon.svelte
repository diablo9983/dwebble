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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-polygon" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <circle cx="12" cy="5" r="2" />   <circle cx="19" cy="8" r="2" />   <circle cx="5" cy="11" r="2" />   <circle cx="15" cy="19" r="2" />   <path d="M6.5 9.5l3.5 -3" />   <path d="M14 5.5l3 1.5" />   <path d="M18.5 10l-2.5 7" />   <path d="M13.5 17.5l-7 -5" /> </svg>