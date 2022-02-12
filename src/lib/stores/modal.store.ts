import type { ModalProps } from '$lib/common/types/modal';
import { writable } from 'svelte/store';

const createModalProps = () => {
	const { subscribe, set, update } = writable<ModalProps>({
		height: 650,
		width: 800,
		bgColor: 'bg-gray-primary',
		gap: 18,
		padding: 48
	});

	return {
		subscribe,
		set,
		update
	};
};

export const modalPropsStore = createModalProps();
