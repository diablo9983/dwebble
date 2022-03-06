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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-border-style" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <path d="M4 20v-14a2 2 0 0 1 2 -2h14" />   <path d="M20 8v.01" />   <path d="M20 12v.01" />   <path d="M20 16v.01" />   <path d="M8 20v.01" />   <path d="M12 20v.01" />   <path d="M16 20v.01" />   <path d="M20 20v.01" /> </svg>