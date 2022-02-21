export function randomId() {
	return `dwebble-${Math.random().toString(36).substring(2, 11)}`;
}
