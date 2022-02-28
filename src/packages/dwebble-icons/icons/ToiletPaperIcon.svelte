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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-toilet-paper" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>     <ellipse cx="6" cy="10" rx="3" ry="7" />   <path d="M21 10c0 -3.866 -1.343 -7 -3 -7" />   <path d="M6 3h12" />   <path d="M21 10v10l-3 -1l-3 2l-3 -3l-3 2v-10" />   <path d="M6 10h.01" /> </svg>