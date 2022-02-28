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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-box-model" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <path d="M8 8h8v8h-8z" />   <rect x="4" y="4" width="16" height="16" rx="2" />   <path d="M16 16l3.3 3.3" />   <path d="M16 8l3.3 -3.3" />   <path d="M8 8l-3.3 -3.3" />   <path d="M8 16l-3.3 3.3" /> </svg>