import { getRepositories } from '$lib/api/github';
import { GithubClassName } from '$lib/common/enums/github-repo';
import type { Repository } from '$lib/common/interface/github-repo';
import type { CardShowcaseProps, GithubCardProps } from '$lib/common/types/card';
import type { Size } from '$lib/common/types/common';
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

	const resetCardStyle = (selectedPos: number) => {
		update((oldProps) => {
			const result = oldProps.map((props: GithubCardProps) => ({
				...props,
				cardClass: GithubClassName.CARD_DESELECTED,
				titleColor: GithubClassName.TITLE_DESELECTED
			}));

			result[selectedPos].cardClass = GithubClassName.CARD_SELECTED;
			result[selectedPos].titleColor = GithubClassName.TITLE_SELECTED;

			return result;
		});
	};

	return {
		subscribe,
		fetch,
		resetCardStyle,
		update
	};
};

const createDisplayRepositoriesCard = () => {
	const { subscribe, set, update } = writable<GithubCardProps[]>([]);

	const setRepository = (props: GithubCardProps[], offsetPos: number, maxShown: number) => {
		update(() => {
			return props.slice(offsetPos, offsetPos + maxShown);
		});
	};

	return {
		subscribe,
		setRepository,
		set
	};
};

const createCardShowCasePropsStore = () => {
	const { subscribe, set, update } = writable<CardShowcaseProps>({
		cards: [],
		maxShown: 4,
		cardSize: {
			height: 300,
			width: 225
		}
	});

	const setCard = (cards: GithubCardProps[]) => {
		update((oldProps) => {
			return {
				cards,
				cardSize: oldProps.cardSize,
				maxShown: oldProps.maxShown
			};
		});
	};

	const setCardSize = (cardSize: Size) => {
		update((oldProps) => {
			return {
				cards: oldProps.cards,
				maxShown: oldProps.maxShown,
				cardSize
			};
		});
	};

	const setMaxShown = (maxShown: number) => {
		update((oldProps) => {
			return {
				cards: oldProps.cards,
				maxShown,
				cardSize: oldProps.cardSize
			};
		});
	};
	return {
		subscribe,
		set,
		setCardSize,
		setMaxShown,
		setCard
	};
};

export const selectedPos = writable<number>(0);
export const offsetPos = writable<number>(0);
export const rightArrowStore = createRightArrow();
export const leftArrowStore = createLeftArrow();
export const repositoriesStore = createRepositories();
export const displayRepositoriesCardStore = createDisplayRepositoriesCard();
export const cardShowCaseProps = createCardShowCasePropsStore();
