import type { AboutMeProps } from '$lib/common/types/aboutme';
import { writable } from 'svelte/store';

const createAboutMeProps = () => {
	const { subscribe, set, update } = writable<AboutMeProps>({
		name: 'Samithiwat Boonchai',
		description: 'Software Engineer, Backend & Devops',
		content:
			'Greetings, my name is Samithiwat Boonchai, a 3nd-year Computer Engineering student, at Chulalongkorn University. ' +
			'I love coding and doing a project that can make an impact on others looking forward to meeting you.',
		imgUrl: 'https://storage.googleapis.com/samithiwat-bucket/about-me-protrait.png'
	});

	const fetch = async () => {
		set({
			name: '',
			description: '',
			content: '',
			imgUrl: ''
		});
	};

	return {
		subscribe,
		fetch,
		update
	};
};

export const aboutmeProps = createAboutMeProps();
