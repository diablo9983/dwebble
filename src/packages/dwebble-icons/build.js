const fs = require("fs-extra");
const path = require("path");
const { pascalCase } = require("pascal-case");

const PATH = path.resolve("node_modules/@tabler/icons/icons");
const pkgPath = path.resolve("src/packages/dwebble-icons");

console.log({ PATH });

const componentTemplate = (name, svg) =>
	`
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

${svg
		.replace(/stroke="([A-z0-9-]+)"\s/, "")
		.replace(/stroke-width="(\d+)"\s/, "")
		.replace(/width="(\d+)"\s/, "")
		.replace(/height="(\d+)"\s/, "")
		.replace(/<svg([^>]+)>/, "<svg$1 width={iconWidth} height={iconHeight} stroke-width={strokeWidth} stroke={color} {...$$$restProps}>")}
`.trim();

const aliases = {
	"2fa.svg": "two-factor-auth.svg",
	"3d-cube-sphere.svg": "threed-cube-sphere.svg",
};

fs.readdir(PATH, (err, items) => {
	let index = [];
	items
		.filter((name) => name.endsWith(".svg"))
		.forEach((name, pos) => {
			process.stdout.write(`Building ${pos}/${items.length}: ` + name.padEnd(42) + '\r');

			let content = fs.readFileSync(`${PATH}/${name}`, "utf-8").replace(/\n/gm, " ");

			// make name
			if (name in aliases) name = aliases[name];
			let nameCamel = pascalCase(name.replace(".svg", "")).replace(/_(\d)/g, "$1") + "Icon";

			// create component
			let component = componentTemplate(nameCamel, content);

			// write icon component
			let filePath = path.resolve(pkgPath, `icons/${nameCamel}.svelte`);
			fs.ensureDirSync(path.dirname(filePath));
			fs.writeFileSync(filePath, component, "utf-8");

			index.push(`export { default as ${nameCamel} } from './icons/${nameCamel}.svelte';`);
		});

	index.push("");

	fs.writeFileSync(path.resolve(pkgPath, "index.js"), index.join("\n"), "utf-8");
})
