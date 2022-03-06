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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye-table" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <path d="M8.003 18.003h-.011" />   <path d="M12.003 18.002h-.011" />   <path d="M16.003 18.002h-.011" />   <path d="M4 3h16" />   <path d="M5 3v17a1 1 0 0 0 1 1h12a1 1 0 0 0 1 -1v-17" />   <path d="M14 7h-4" />   <path d="M9 15h1" />   <path d="M14 15h1" />   <path d="M12 11v-4" /> </svg>