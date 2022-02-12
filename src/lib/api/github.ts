import type { GithubRepository, Repository } from '$lib/common/interface/github-repo';
import Axios, { AxiosInstance, AxiosResponse } from 'axios';
import moment from 'moment';

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
		return response.data.map((repo: GithubRepository) => ({
			id: repo.id,
			name: repo.name,
			author: repo.owner.login,
			description: repo.description,
			url: repo.html_url,
			stars: repo.stargazers_count,
			updatedAt: repo.updated_at,
			date: moment(repo.updated_at).format('DD MMM YYYY'),
			time: moment(repo.updated_at).format('HH:mm A')
		}));
	} catch (error) {
		console.error(error);
		return error;
	}
};

export { getRepositories };
