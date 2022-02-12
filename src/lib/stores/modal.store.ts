import { Modal } from '$lib/common/enums/modal';
import type { ModalProps, ModalStatus } from '$lib/common/types/modal';
import { writable } from 'svelte/store';

const createModalCarouselProps = () => {
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
	const { subscribe, set, update } = writable<ModalStatus>({
		carousel: false,
		isOpen: false
	});
	const open = (type: Modal) => {
		update(() => {
			const result = {
				carousel: false,
				isOpen: true
			};
			switch (type) {
				case Modal.CAROUSEL:
					result.carousel = true;
					break;
			}
			return result;
		});
	};

	const close = () =>
		update(() => ({
			carousel: false,
			isOpen: false
		}));

	return {
		subscribe,
		open,
		close,
		set
	};
};

export const modalCarouselPropsStore = createModalCarouselProps();
export const modalStatusStore = createModalStatus();
