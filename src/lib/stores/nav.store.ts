import { writable } from 'svelte/store';

const createMenuIcon = () => {
	const { subscribe, set, update } = writable<string>('ic:baseline-menu');

	const toggle = () =>
		update((v) => {
			if (v === 'ic:baseline-menu') {
				return 'ic:baseline-menu-open';
			}
			return 'ic:baseline-menu';
		});

	return {
		subscribe,
		toggle,
		set
	};
};

export const menuIconStore = createMenuIcon();
