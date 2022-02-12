export interface Timeline {
	id: number;
	slug: string;
	name: string;
	description: string;
	thumbnail: string;
	images: Image[];
	eventDate: Date;
}

export interface Image {
	id: number;
	name: string;
	description: string;
	imgUrl: string;
}
