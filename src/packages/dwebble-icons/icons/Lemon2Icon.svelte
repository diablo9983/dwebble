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

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-lemon-2" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$restProps}>   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <path d="M18 4a2 2 0 0 1 1.185 3.611c1.55 2.94 .873 6.917 -1.892 9.682c-2.765 2.765 -6.743 3.442 -9.682 1.892a2 2 0 1 1 -2.796 -2.796c-1.55 -2.94 -.873 -6.917 1.892 -9.682c2.765 -2.765 6.743 -3.442 9.682 -1.892a1.999 1.999 0 0 1 1.611 -.815z" /> </svg>