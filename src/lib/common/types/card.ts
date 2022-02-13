import type { Repository } from '../interface/github-repo';
import type { Timeline } from '../interface/timeline';

type Card = {
	id?: number;
	title?: string;
	desc?: string;
	height?: number;
	width?: number;
	imgUrl?: string;
};

export type SmallPhotoCardProps = Card & {
	cardClass?: string;
	titleColor?: string;
};

export type MediumPhotoCardProps = Card;

export type TimelineCardProps = MediumPhotoCardProps & {
	date: string;
	timelineData: Timeline;
};

export type GithubCardProps = SmallPhotoCardProps & {
	repository: Repository;
	cardClass: string;
	titleColor: string;
};
