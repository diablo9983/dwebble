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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-rotate-2" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <path d="M15 4.55a8 8 0 0 0 -6 14.9m0 -4.45v5h-5" />   <line x1="18.37" y1="7.16" x2="18.37" y2="7.17" />   <line x1="13" y1="19.94" x2="13" y2="19.95" />   <line x1="16.84" y1="18.37" x2="16.84" y2="18.38" />   <line x1="19.37" y1="15.1" x2="19.37" y2="15.11" />   <line x1="19.94" y1="11" x2="19.94" y2="11.01" /> </svg>