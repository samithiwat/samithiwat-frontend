import type { Color } from '../enums/common';

export type ModalProps = {
	bgColor?: Color;
};

export type ModalImageProps = {
	name: string;
	description: string;
	imgUrl: string;
};

export type ModalCarousel = ModalProps & {
	content?: string;
	images?: ModalImageProps[];
};

export type ModalStatus = {
	isOpen: boolean;
	carousel: boolean;
};
