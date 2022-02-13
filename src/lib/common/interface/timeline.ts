import type { IconType } from '../enums/timeline';

export interface Timeline {
	id: number;
	slug: string;
	name: string;
	description: string;
	thumbnail: string;
	images: Image[];
	eventDate: Date;
	icon: string;
	iconBgColor: string;
	iconType: IconType;
}

export interface Image {
	id: number;
	name: string;
	description: string;
	imgUrl: string;
}
