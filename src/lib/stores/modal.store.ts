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

const createModalStatus = () => {
	const { subscribe, set, update } = writable<boolean>(false);
	const open = () => update(() => true);
	const close = () => update(() => false);
	return {
		subscribe,
		open,
		close,
		set
	};
};

export const modalPropsStore = createModalProps();
export const modalStatusStore = createModalStatus();
