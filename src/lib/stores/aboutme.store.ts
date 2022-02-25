import type { AboutMeProps } from '$lib/common/types/aboutme';
import { writable } from 'svelte/store';

const createAboutMeProps = () => {
	const { subscribe, set, update } = writable<AboutMeProps>({
		name: 'Samithiwat Boonchai',
		description: 'Software Engineer, Backend & Devops',
		content:
			"Greetings! my name is Samithiwat Boonchai, a 2nd-year Computer Engineering student, at Chulalongkorn University. I'm a backend and DevOps, mostly backend stuff, ambitious software engineering. I love to collaborate with others. At this time I'm looking for a part-time job please contact me if you are interesting I hope experience and skill are exactly what you are looking for. looking forward to meet you!",
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
