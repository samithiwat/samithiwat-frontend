import { Color } from '$lib/common/enums/common';
import { IconType } from '$lib/common/enums/timeline';
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
				icon: 'clarity:ruler-pencil-line',
				iconType: IconType.ICON,
				iconBgColor: Color.BLUE_ICON,
				name: 'PRIMARY SCHOOL',
				description:
					"When I was 8 years old I studied in the primary school at Saint Gabriel's College.",
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
				icon: 'bi:book',
				iconType: IconType.ICON,
				iconBgColor: Color.YELLOW_ICON,
				name: 'SECONDARY SCHOOL',
				description:
					"After I graduated from the primary school, I moved to the secondary school at the same place at Saint Gabriel's College and when enter in the senior high school I'm studied in Science and Math Accelerate Programe. In this program you can studied only 2 years and then graduate from highschool.",
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
						imgUrl: 'https://storage.googleapis.com/samithiwat-bucket/timeline-secondary2.jpg'
					}
				]
			}
		},
		{
			date: 'APRIL 2019',
			timelineData: {
				id: 3,
				icon: 'cil:education',
				iconType: IconType.ICON,
				iconBgColor: Color.MINT_PRIMARY,
				name: 'GRADUATED',
				description: `After I studied senior highschool for 2 years I graduated and moved to the Chulalongkorn University. I'm studying in the Bachelor of Computer Engineering.`,
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
				icon: 'la:laptop-code',
				iconType: IconType.ICON,
				iconBgColor: Color.PINK_PRIMARY,
				name: 'UNIVERSITY',
				description:
					"It feel like a dream come true that I have a chance to study at the Chulalongkorn University. Studying at Chula isn't easy because everyone in this university got a talent and very smart. I have work hard for the whole years to survive and I also do a lots of activites and got an experice from it.",
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
				icon: 'svg/thinc_logo.svg',
				iconType: IconType.SVG,
				iconBgColor: Color.GRAY_ICON,
				name: 'THINC CLUB',
				description:
					"I'm working at the club called 'Thailand Incubator' (THINC) and I'm currently the treasurer and backend developer. I have a chance to do a Rab Nong Kao Mai (RNKM) with THINC. In this project I create a Logger by using a middleware to interact a request from the user and then store it to the time series database.",
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
				icon: 'svg/courseville_logo.svg',
				iconType: IconType.SVG,
				iconBgColor: Color.YELLOW_CARD,
				name: 'SUMMER INTERNSHIP',
				description:
					"I have got a chance to work in the summer internship at the My Course Vill Co., I'm working on the project called Smart School, doing a Learning Management System (LMS).",
				eventDate: moment().toDate(),
				slug: 'primary-school',
				thumbnail: 'https://storage.googleapis.com/samithiwat-bucket/timeline-MCV-Background.svg',
				images: [
					{
						id: 13,
						name: 'mcv 1',
						description:
							'In this project I created a feature that help teachers to assign homework to the student as a template file and student can interact by download to ther PC or do it in the MS office website and then submit it back to the teacher.',
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
				icon: 'svg/sgcu_logo.svg',
				iconType: IconType.SVG,
				iconBgColor: Color.PINK_SGCU_ICON,
				name: 'SGCU 64',
				description:
					'In the late summer of 2021, I got a chance join the SGCU 64 ISD team, I was working on the project called "CU The Journey" and "Dedicated Server" and currently doing a "Mind Market" as developer and "Loykathong" and "MC of Chula Contest" as a operator at livestream team.',
				eventDate: moment().toDate(),
				slug: 'primary-school',
				thumbnail: 'https://storage.googleapis.com/samithiwat-bucket/timeline-SGCU-Background.svg',
				images: [
					{
						id: 15,
						name: 'sgcu',
						description: '',
						imgUrl: 'https://storage.googleapis.com/samithiwat-bucket/timeline-SGCU-Background.svg'
					},
					{
						id: 16,
						name: 'sgcu',
						description: '',
						imgUrl: 'https://storage.googleapis.com/samithiwat-bucket/timeline-sgcu2.jpg'
					}
				]
			}
		},
		{
			date: 'DECEMBER 2021',
			timelineData: {
				id: 8,
				icon: 'svg/fe_logo.svg',
				iconType: IconType.SVG,
				iconBgColor: Color.PINK_FECAMP_ICON,
				name: 'FE CAMP',
				description:
					"In the end of 2021, I got an invitation from my friend to be a Tech Lead of FE CAMP website team. I'm working on planing,creating a backlogs for team, review codes and merge them and also got a chance to be a devops using a Kubernetes for deploying the project and write a CI/CD pipeline.",
				eventDate: moment().toDate(),
				slug: 'primary-school',
				thumbnail:
					'https://storage.googleapis.com/samithiwat-bucket/timeline-fecamp-Background.svg',
				images: [
					{
						id: 17,
						name: 'fecamp',
						description: '',
						imgUrl:
							'https://storage.googleapis.com/samithiwat-bucket/timeline-fecamp-Background.svg'
					}
				]
			}
		},
		{
			date: 'DECEMBER 2021',
			timelineData: {
				id: 9,
				icon: 'svg/nitad_logo.svg',
				iconType: IconType.SVG,
				iconBgColor: Color.YELLOW_CARD,
				name: 'NITAD 18',
				description:
					'In the end of 2021, It is a concurency of FE Camp, I got a chance to join the NITAD 18 in IT team. I working as a Backend Tech Lead and devops of this project. My job is almost same as FE Camp, creating backlogs, review code and merge it.',
				eventDate: moment().toDate(),
				slug: 'primary-school',
				thumbnail: 'https://storage.googleapis.com/samithiwat-bucket/timeline-nitad-Background.svg',
				images: [
					{
						id: 18,
						name: 'nitad',
						description: '',
						imgUrl: 'https://storage.googleapis.com/samithiwat-bucket/timeline-nitad-Background.svg'
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
