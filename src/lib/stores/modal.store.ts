import { Modal } from '$lib/common/enums/modal';
import type { ModalCarousel, ModalImageProps, ModalStatus } from '$lib/common/types/modal';
import { writable } from 'svelte/store';

const createModalCarouselProps = () => {
	const { subscribe, set, update } = writable<ModalCarousel>({
		height: 650,
		width: 800,
		bgColor: 'bg-gray-primary',
		gap: 18,
		padding: 48,
		title: '',
		content: '',
		images: []
	});

	const setModalContent = (title: string, content: string, images: ModalImageProps[]) => {
		update((oldProps: ModalCarousel) => {
			const result = oldProps;
			result.content = content;
			result.title = title;
			result.images = images;
			return result;
		});
	};

	return {
		subscribe,
		setModalContent,
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
