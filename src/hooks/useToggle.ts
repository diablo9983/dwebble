import {writable} from "svelte/store";

export function useToggle<T>(initialValue: T, options: [T, T]) {
	const state = writable<T>(initialValue);

	const toggle = () => {
		state.update(current => {
			if (current === options[0]) {
				return options[1];
			}
			return options[0];
		})
	}

	return [state, toggle] as const;
}

export function useBooleanToggle(initialValue = false) {
	return useToggle(initialValue, [true, false]);
}
