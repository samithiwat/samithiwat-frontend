import type { Repository } from '../interface/github-repo';

export type SmallPhotoCardProps = {
	title?: string;
	desc?: string;
	date?: string;
	time?: string;
	height?: number;
	width?: number;
	src?: string;
	pos?: number;
	cardClass?: string;
	titleColor?: string;
};

export type GithubCardProps = {
	repository: Repository;
	cardClass: string;
	titleColor: string;
};
