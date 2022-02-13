import type { Timeline } from '$lib/common/interface/timeline';
import type { TimelineCardProps } from '$lib/common/types/card';
import moment from 'moment';
import { writable } from 'svelte/store';

const createTimelineData = () => {
	const { subscribe, set, update } = writable<Timeline[]>([]);

	const fetch = () => {
		update(() => []);
	};

	return {
		subscribe,
		fetch,
		set
	};
};

const createTimelineProps = () => {
	const { subscribe, set, update } = writable<TimelineCardProps[]>([
		{
			date: 'MAY 2008',
			timelineData: {
				id: 1,
				name: 'PRIMARY SCHOOL',
				description:
					'Nam id convallis massa, ac mollis metus. Vestibulum sit amet arcu sed est aliquet egestas. Phasellus tristique orci turpis, sed cursus erat euismod in. Maecenas malesuada tortor blandit, facilisis nunc quis, mattis leo. Mauris gravida neque nisi, et maximus lorem blandit vitae. Sed commodo lorem non purus cursus lobortis. Curabitur tempus lobortis elementum.',
				eventDate: moment().toDate(),
				slug: 'primary-school',
				thumbnail: 'https://storage.googleapis.com/samithiwat-bucket/timeline-primary-school.jpg',
				images: [
					{
						id: 1,
						name: 'primary school 1',
						description: '',
						imgUrl: 'https://storage.googleapis.com/samithiwat-bucket/timeline-primary-school.jpg'
					},
					{
						id: 2,
						name: 'primary school 2',
						description: '',
						imgUrl:
							'https://storage.googleapis.com/samithiwat-bucket/timeline-saint-gabriel-college-primary.jpg'
					}
				]
			}
		},
		{
			date: 'MAY 2014',
			timelineData: {
				id: 2,
				name: 'SECONDARY SCHOOL',
				description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod sem at lectus feugiat
                    aliquam. Nam sodales eleifend fringilla. Aliquam non nunc viverra, suscipit dui nec, faucibus
                    arcu. Donec porttitor libero congue dictum porttitor. Etiam eu pulvinar erat, at consectetur
                    quam. Nunc ultricies vestibulum turpis id varius.`,
				eventDate: moment().toDate(),
				slug: 'secondary-school',
				thumbnail: 'https://storage.googleapis.com/samithiwat-bucket/timeline-high-school.jpg',
				images: [
					{
						id: 3,
						name: 'secondary school 1',
						description: '',
						imgUrl: 'https://storage.googleapis.com/samithiwat-bucket/timeline-high-school.jpg'
					},
					{
						id: 4,
						name: 'secondary school 2',
						description: '',
						imgUrl:
							'https://storage.googleapis.com/samithiwat-bucket/timeline-saint-gabriel-college-secondary.jpg'
					}
				]
			}
		},
		{
			date: 'APRIL 2019',
			timelineData: {
				id: 3,
				name: 'GRADUATED',
				description: `Cras ornare justo non ipsum ultrices porttitor. Sed sed aliquet est. Sed porta metus sit amet suscipit rutrum. Integer in turpis in ante fringilla laoreet. Suspendisse sed arcu velit. Mauris convallis molestie lectus quis viverra. Curabitur rutrum mauris ipsum, at ullamcorper diam vulputate non. Sed sodales vulputate dolor et faucibus. Nunc id facilisis metus, et tincidunt ipsum.`,
				eventDate: moment().toDate(),
				slug: 'graduated',
				thumbnail: 'https://storage.googleapis.com/samithiwat-bucket/timeline-graduated.png',
				images: [
					{
						id: 5,
						name: 'graduated 1',
						description: '',
						imgUrl: 'https://storage.googleapis.com/samithiwat-bucket/timeline-graduated.png'
					},
					{
						id: 6,
						name: 'graduated 2',
						description: '',
						imgUrl: 'https://storage.googleapis.com/samithiwat-bucket/timeline-graduated2.PNG'
					},
					{
						id: 7,
						name: 'graduated 3',
						description: '',
						imgUrl: 'https://storage.googleapis.com/samithiwat-bucket/timeline-graduated3.jpg'
					}
				]
			}
		},
		{
			date: 'AUGUST 2020',
			timelineData: {
				id: 4,
				name: 'UNIVERSITY',
				description:
					'Curabitur risus massa, elementum id vestibulum non, consectetur nec metus. Aenean urna sapien, laoreet lobortis dui at, imperdiet vulputate turpis. Nulla posuere, elit finibus sollicitudin vehicula, tellus dolor mattis turpis, sit amet tincidunt felis nisi a risus. Donec quis pharetra neque, ac egestas ante. Sed erat quam, malesuada eget lorem ac, semper pharetra erat.',
				eventDate: moment().toDate(),
				slug: 'university',
				thumbnail: 'https://storage.googleapis.com/samithiwat-bucket/timeline-cu.jpg',
				images: [
					{
						id: 8,
						name: 'university 1',
						description: '',
						imgUrl: 'https://storage.googleapis.com/samithiwat-bucket/timeline-cu.jpg'
					},
					{
						id: 9,
						name: 'university 2',
						description: '',
						imgUrl: 'https://storage.googleapis.com/samithiwat-bucket/timeline-cu2.jpg'
					}
				]
			}
		},
		{
			date: 'AUGUST 2020',
			timelineData: {
				id: 5,
				name: 'THINC CLUB',
				description:
					'Nam id convallis massa, ac mollis metus. Vestibulum sit amet arcu sed est aliquet egestas. Phasellus tristique orci turpis, sed cursus erat euismod in. Maecenas malesuada tortor blandit, facilisis nunc quis, mattis leo. Mauris gravida neque nisi, et maximus lorem blandit vitae. Sed commodo lorem non purus cursus lobortis. Curabitur tempus lobortis elementum.',
				eventDate: moment().toDate(),
				slug: 'primary-school',
				thumbnail: 'https://storage.googleapis.com/samithiwat-bucket/timeline-Thinc-Background.svg',
				images: [
					{
						id: 11,
						name: 'thinc club 1',
						description: '',
						imgUrl: 'https://storage.googleapis.com/samithiwat-bucket/timeline-Thinc-Background.svg'
					},
					{
						id: 12,
						name: 'thinc club 2',
						description: '',
						imgUrl: 'https://storage.googleapis.com/samithiwat-bucket/timeline-thinc2.jpg'
					}
				]
			}
		},
		{
			date: 'MAY 2021',
			timelineData: {
				id: 6,
				name: 'SUMMBER INTERNSHIP',
				description:
					'Sed eu ligula ex. Vivamus porta dui vitae ipsum commodo, non gravida nibh tristique. Nam feugiat dui dui, eget viverra augue faucibus in. Vestibulum non ipsum vel est scelerisque cursus non dapibus ipsum. Curabitur non lectus rhoncus, aliquet dolor id, mattis est. Nam nec elit eu tellus commodo tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent vitae pellentesque nulla. Nunc commodo ipsum vitae felis porttitor sagittis.',
				eventDate: moment().toDate(),
				slug: 'primary-school',
				thumbnail: 'https://storage.googleapis.com/samithiwat-bucket/timeline-MCV-Background.svg',
				images: [
					{
						id: 13,
						name: 'mcv 1',
						description: '',
						imgUrl: 'https://storage.googleapis.com/samithiwat-bucket/timeline-MCV-Background.svg'
					},
					{
						id: 14,
						name: 'mcv 2',
						description: '',
						imgUrl: 'https://storage.googleapis.com/samithiwat-bucket/timeline-mcv2.png'
					}
				]
			}
		},
		{
			date: 'JULY 2021',
			timelineData: {
				id: 7,
				name: 'SGCU 64',
				description:
					'Aliquam erat volutpat. Nulla vulputate augue sit amet nisi aliquam, et mattis nibh facilisis. Sed in congue diam, a egestas diam. Donec non elementum leo. Quisque interdum diam sed tempor accumsan. Ut rhoncus ante vitae ante elementum venenatis. Suspendisse eget ante sapien. Mauris at gravida velit. Aliquam eu enim consectetur, fermentum dolor ornare, euismod nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
				eventDate: moment().toDate(),
				slug: 'primary-school',
				thumbnail: 'https://storage.googleapis.com/samithiwat-bucket/timeline-SGCU-Background.svg',
				images: [
					{
						id: 15,
						name: 'PRIMARY SCHOOL',
						description: '',
						imgUrl: 'https://storage.googleapis.com/samithiwat-bucket/timeline-SGCU-Background.svg'
					},
					{
						id: 16,
						name: 'PRIMARY SCHOOL',
						description: '',
						imgUrl: 'https://storage.googleapis.com/samithiwat-bucket/timeline-sgcu2.jpg'
					}
				]
			}
		}
	]);

	const setProps = (props: TimelineCardProps[]) => {
		update(() => props);
	};

	return {
		subscribe,
		set,
		setProps
	};
};

export const timelineProps = createTimelineProps();
export const timelineDatas = createTimelineData();
