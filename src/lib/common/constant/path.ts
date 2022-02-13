import { Path } from '../enums/path';
import type { PagePath } from '../types/path';

export const paths: PagePath[] = [
	{
		name: 'Home',
		path: Path.LANDING
	},
	{
		name: 'About',
		path: Path.ABOUT
	},
	{
		name: 'Contact',
		path: Path.CONTACT
	},
	{
		name: 'Blog',
		path: Path.BLOG
	}
];
