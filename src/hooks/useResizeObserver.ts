import {get, writable} from "svelte/store";

type ObserverRect = Omit<DOMRectReadOnly, 'toJSON'>;

const defaultState: ObserverRect = {
	x: 0,
	y: 0,
	width: 0,
	height: 0,
	top: 0,
	left: 0,
	bottom: 0,
	right: 0,
};

const browser = typeof window !== 'undefined';

export function useResizeObserver(ref) {
	const frameId = writable(0);
	const rect = writable(defaultState);

	const observer = browser
		? new ResizeObserver((entries: any) => {
			const entry = entries[0];

			if (entry) {
				cancelAnimationFrame(get(frameId));

				frameId.set(requestAnimationFrame(() => {

				}))
			}
		}) : null;

	observer.observe(ref);

	return [rect, () => {
		observer.disconnect();

		if (get(frameId)) {
			cancelAnimationFrame(get(frameId));
		}
	}];
}
