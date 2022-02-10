import type { SmallPhotoCardProps } from '$lib/common/types/small-photo-card';
import { writable } from 'svelte/store';

const createRightArrow = () => {
	const { subscribe, set, update } = writable<string>('bi:arrow-right-circle-fill');

	const triggle = () => {
		update(() => {
			setTimeout(() => {
				set('bi:arrow-right-circle-fill');
			}, 200);
			return 'bi:arrow-right-circle';
		});
	};

	return {
		subscribe,
		triggle,
		set
	};
};

const createLeftArrow = () => {
	const { subscribe, set, update } = writable<string>('bi:arrow-left-circle-fill');

	const triggle = () => {
		update(() => {
			setTimeout(() => {
				set('bi:arrow-left-circle-fill');
			}, 200);
			return 'bi:arrow-left-circle';
		});
	};

	return {
		subscribe,
		triggle,
		set
	};
};

const createSelecteCardClicked = () => {
	const { subscribe, set, update } = writable<SmallPhotoCardProps>({
		// index: -1,
		// card: null
	});
};

const createDeseleteCardClicked = () => {
	const { subscribe, set, update } = writable<number>(-1);
};

export const rightArrowStore = createRightArrow();
export const leftArrowStore = createLeftArrow();
