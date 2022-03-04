import type { Color } from '$lib/common/enums/common';
import type { GithubRepository, Repository } from '$lib/common/interface/github-repo';
import Axios, { AxiosInstance, AxiosResponse } from 'axios';
import moment from 'moment';

// FIXME: This is a temporary solution to get the store to work.

const MockData = [
	{
		framework: {
			id: 1,
			name: 'NONE',
			color: 'fff' as Color,
			iconName: '-',
			iconColor: 'white' as Color
		},
		language: {
			id: 1,
			name: 'NONE',
			color: 'fff' as Color,
			iconName: '-',
			iconColor: 'white' as Color
		}
	},
	{
		framework: {
			id: 2,
			name: 'NONE',
			color: 'fff' as Color,
			iconName: '-',
			iconColor: 'white' as Color
		},
		language: {
			id: 2,
			name: 'Java',
			color: 'E76F00' as Color,
			iconName: 'java',
			iconColor: 'white' as Color
		}
	},
	{
		framework: {
			id: 3,
			name: 'NONE',
			color: 'fff' as Color,
			iconName: '-',
			iconColor: 'white' as Color
		},
		language: {
			id: 3,
			name: 'NONE',
			color: 'fff' as Color,
			iconName: '-',
			iconColor: 'white' as Color
		}
	},
	{
		framework: {
			id: 4,
			name: 'Nestjs',
			color: 'E0234E' as Color,
			iconName: 'Nestjs',
			iconColor: 'white' as Color
		},
		language: {
			id: 4,
			name: 'Typescript',
			color: '007ACC' as Color,
			iconName: 'Typescript',
			iconColor: 'white' as Color
		}
	},
	{
		framework: {
			id: 5,
			name: 'Fiber',
			color: 'fff' as Color,
			iconName: '-',
			iconColor: 'white' as Color
		},
		language: {
			id: 5,
			name: 'Go',
			color: '00ADD8' as Color,
			iconName: 'GO',
			iconColor: 'white' as Color
		}
	},
	{
		framework: {
			id: 6,
			name: 'Spring_Boot',
			color: '6DB33F' as Color,
			iconName: 'springboot',
			iconColor: 'white' as Color
		},
		language: {
			id: 6,
			name: 'Java',
			color: 'E76F00' as Color,
			iconName: 'Java',
			iconColor: 'white' as Color
		}
	},
	{
		framework: {
			id: 7,
			name: 'Svelte--Kit',
			color: 'FF3E00' as Color,
			iconName: 'svelte',
			iconColor: 'white' as Color
		},
		language: {
			id: 7,
			name: 'Svelte',
			color: 'FF3E00' as Color,
			iconName: 'svelte',
			iconColor: 'white' as Color
		}
	},
	{
		framework: {
			id: 8,
			name: 'Nestjs',
			color: 'E0234E' as Color,
			iconName: 'nestjs',
			iconColor: 'white' as Color
		},
		language: {
			id: 8,
			name: 'Typescript',
			color: '007ACC' as Color,
			iconName: 'typescript',
			iconColor: 'white' as Color
		}
	}
];

const client: AxiosInstance = Axios.create({
	baseURL: 'https://api.github.com',
	auth: {
		username: import.meta.env.VITE_GITHUB_USERNAME as string,
		password: import.meta.env.VITE_GITHUB_PASSWORD as string
	}
});

const getRepositories = async (): Promise<Repository[]> => {
	try {
		const response: AxiosResponse = await client.get('/users/samithiwat/repos');
		return await response.data.map((repo: GithubRepository, pos: number) => ({
			id: repo.id,
			name: repo.name,
			author: repo.owner.login,
			description: repo.description,
			url: repo.html_url,
			stars: repo.stargazers_count,
			updatedAt: repo.updated_at,
			date: moment(repo.updated_at).format('DD MMM YYYY'),
			time: moment(repo.updated_at).format('HH:mm A'),
			framework: MockData[pos].framework,
			language: MockData[pos].language
		}));
	} catch (error) {
		console.error(error);
		return error;
	}
};

export { getRepositories };
