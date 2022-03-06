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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-subtask" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <line x1="6" y1="9" x2="12" y2="9" />   <line x1="4" y1="5" x2="8" y2="5" />   <path d="M6 5v11a1 1 0 0 0 1 1h5" />   <rect x="12" y="7" width="8" height="4" rx="1" />   <rect x="12" y="15" width="8" height="4" rx="1" /> </svg>