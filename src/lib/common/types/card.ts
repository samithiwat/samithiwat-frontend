import type { Repository } from '../interface/github-repo';

export type SmallPhotoCardProps = {
	id?: number;
	title?: string;
	desc?: string;
	date?: string;
	time?: string;
	height?: number;
	width?: number;
	src?: string;
};
	cardClass?: string;
	titleColor?: string;
};

export type MediumPhotoCardProps = {
	title?: number;
	desc?: number;
	height?: number;
	width?: number;
	src?: string;
};

export type GithubCardProps = {
	repository: Repository;
	cardClass: string;
	titleColor: string;
};
