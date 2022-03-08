import {get, writable} from "svelte/store";
import {clamp} from "./utils/clamp";

export interface UseMovePosition {
	x: number;
	y: number;
}

export const clampUseMovePosition = (position: UseMovePosition) => ({
	x: clamp({ min: 0, max: 1, value: position.x }),
	y: clamp({ min: 0, max: 1, value: position.y }),
});

interface useMoveHandlers {
	onScrubStart?(): void;
	onScrubEnd?(): void;
}

export function useMove() {
	const frame = writable(0);
	const isSliding = writable(false);
	const active = writable(false);

	return (
		ref: HTMLElement,
		onChange: (value: UseMovePosition) => void,
		handlers?: useMoveHandlers,
		dir: 'ltr' | 'rtl' = 'ltr'
	) => {
		const onScrub = ({ x, y }: UseMovePosition) => {
			cancelAnimationFrame(get(frame));

			frame.set(requestAnimationFrame(() => {
				if (ref) {
					ref.style.userSelect = 'none';
					const rect = ref.getBoundingClientRect();

					if (rect.width && rect.height) {
						const _x = clamp({ value: (x - rect.left) / rect.width, min: 0, max: 1 });
						onChange({
							x: dir === 'ltr' ? _x : 1 - _x,
							y: clamp({ value: (y - rect.top) / rect.height, min: 0, max: 1 }),
						});
					}
				}
			}));
		};

		const bindEvents = () => {
			document.addEventListener('mousemove', onMouseMove);
			document.addEventListener('mouseup', stopScrubbing);
			document.addEventListener('touchmove', onTouchMove);
			document.addEventListener('touchend', stopScrubbing);
		};

		const unbindEvents = () => {
			document.removeEventListener('mousemove', onMouseMove);
			document.removeEventListener('mouseup', stopScrubbing);
			document.removeEventListener('touchmove', onTouchMove);
			document.removeEventListener('touchend', stopScrubbing);
		};

		const startScrubbing = () => {
			if (!get(isSliding)) {
				isSliding.set(true);
				typeof handlers?.onScrubStart === 'function' && handlers.onScrubStart();
				active.set(true);
				bindEvents();
			}
		};

		const stopScrubbing = () => {
			if (get(isSliding)) {
				isSliding.set(false);
				typeof handlers?.onScrubEnd === 'function' && handlers.onScrubEnd();
				active.set(false);
				unbindEvents();
			}
		};

		const onMouseDown = (event: MouseEvent) => {
			startScrubbing();
			onMouseMove(event);
		};

		const onMouseMove = (event: MouseEvent) => onScrub({ x: event.clientX, y: event.clientY });

		const onTouchStart = (event: TouchEvent) => {
			startScrubbing();
			event?.preventDefault();
			onTouchMove(event);
		};

		const onTouchMove = (event: TouchEvent) => {
			event?.preventDefault();
			onScrub({ x: event.changedTouches[0].clientX, y: event.changedTouches[0].clientY });
		};

		ref.addEventListener('mousedown', onMouseDown);
		ref.addEventListener('touchstart', onTouchStart);

		return [active, () => {
			ref.removeEventListener('mousedown', onMouseDown);
			ref.removeEventListener('touchstart', onTouchStart);
		}];
	}
}
