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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-chrome" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <circle cx="12" cy="12" r="9" />   <circle cx="12" cy="12" r="3" />   <line x1="12" y1="9" x2="20.4" y2="9" />   <line x1="12" y1="9" x2="20.4" y2="9" transform="rotate(120 12 12)" />   <line x1="12" y1="9" x2="20.4" y2="9" transform="rotate(240 12 12)" /> </svg>