export type ModalProps = {
	width: number;
	height: number;
	bgColor: string;
	padding: number;
	gap: number;
};

export type ModalImageProps = {
	name: string;
	description: string;
	imgUrl: string;
};

export type ModalCarousel = ModalProps & {
	title: string;
	content: string;
	images: ModalImageProps[];
};

export type ModalStatus = {
	isOpen: boolean;
	carousel: boolean;
};
