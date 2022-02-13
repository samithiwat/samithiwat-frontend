import { getRepositories } from '$lib/api/github';
import { GithubClassName } from '$lib/common/enums/github-repo';
import type { Repository } from '$lib/common/interface/github-repo';
import type { GithubCardProps } from '$lib/common/types/card';
import { writable } from 'svelte/store';

const createRightArrow = () => {
	const { subscribe, set, update } = writable<string>('bi:arrow-right-circle-fill');

	const triggle = () => {
		update(() => {
			setTimeout(() => {
				set('bi:arrow-right-circle-fill');
			}, 200);
			return 'bi:arrow-right-circle';
		});
	};

	return {
		subscribe,
		triggle,
		set
	};
};

const createLeftArrow = () => {
	const { subscribe, set, update } = writable<string>('bi:arrow-left-circle-fill');

	const triggle = () => {
		update(() => {
			setTimeout(() => {
				set('bi:arrow-left-circle-fill');
			}, 200);
			return 'bi:arrow-left-circle';
		});
	};

	return {
		subscribe,
		triggle,
		set
	};
};

const createRepositories = () => {
	const { subscribe, set, update } = writable<GithubCardProps[]>([]);

	const fetch = async () => {
		const repositories = await getRepositories();
		const props: GithubCardProps[] = repositories.map((repo: Repository) => ({
			cardClass: GithubClassName.CARD_DESELECTED,
			titleColor: GithubClassName.TITLE_DESELECTED,
			repository: repo
		}));
		props[0].cardClass = GithubClassName.CARD_SELECTED;
		props[0].titleColor = GithubClassName.TITLE_SELECTED;
		set(props);
	};

	return {
		subscribe,
		fetch,
		update
	};
};

const createDisplayRepositoriesCard = () => {
	const { subscribe, set, update } = writable<GithubCardProps[]>([]);

	const setRepository = (props: GithubCardProps[], offsetPos: number) => {
		update(() => {
			return props.slice(offsetPos, offsetPos + 4);
		});
	};

	return {
		subscribe,
		setRepository,
		set
	};
};

export const rightArrowStore = createRightArrow();
export const leftArrowStore = createLeftArrow();
export const repositoriesStore = createRepositories();
export const displayRepositoriesCardStore = createDisplayRepositoriesCard();
