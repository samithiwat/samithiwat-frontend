import { writable } from 'svelte/store';

const createToggle = () => {
	const { subscribe, set, update } = writable<boolean>(false);

	return {
		subscribe,
		toggle: () => update((v) => !v),
		set: (value: boolean) => set(value)
	};
};

export const toggleStore = createToggle();
