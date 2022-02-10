import { getRepositories } from '$lib/api/github';
import type { Repository } from '$lib/common/types/github-repo';
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
	const { subscribe, set, update } = writable<Repository[]>([]);

	const fetch = async () => {
		const repositories = await getRepositories();
		set(repositories);
	};

	return {
		subscribe,
		fetch,
		update
	};
};

const createDisplayRepositoriesCard = () => {
	const { subscribe, set, update } = writable<Repository[]>([
		{
			name: 'Untitled',
			author: 'unknown',
			description: 'No description',
			url: '#',
			stars: 0,
			updatedAt: '2020 01 01',
			time: '12:00 AM'
		}
	]);

	const setRepository = (repositories: Repository[], pos: number) => {
		update(() => {
			return repositories.slice(pos, pos + 4);
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
