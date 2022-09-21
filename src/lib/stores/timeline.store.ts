import { Color, Default } from '$lib/common/enums/common';
import { IconType } from '$lib/common/enums/timeline';
import type { Timeline } from '$lib/common/interface/timeline';
import type { TimelineCardProps } from '$lib/common/types/card';
import type { Size } from '$lib/common/types/common';
import type { TimelineProps } from '$lib/common/types/timeline';
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
						imgUrl: 'https://storage.googleapis.com/samithiwat-bucket/timeline-graduated4.jpg'
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
						imgUrl: 'https://storage.googleapis.com/samithiwat-bucket/timeline-cu1.jpg'
					},
					{
						id: 22,
						name: 'university 2',
						description: '',
						imgUrl: 'https://storage.googleapis.com/samithiwat-bucket/timeline-cu3.jpg'
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
						name: 'sgcu 1',
						description: '',
						imgUrl: 'https://storage.googleapis.com/samithiwat-bucket/timeline-SGCU-Background.svg'
					},
					{
						id: 16,
						name: 'sgcu 2',
						description: '',
						imgUrl: 'https://storage.googleapis.com/samithiwat-bucket/timeline-sgcu2.jpg'
					},
					{
						id: 19,
						name: 'sgcu 3',
						description: '',
						imgUrl: 'https://storage.googleapis.com/samithiwat-bucket/timeline-sgcu5.jpg'
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
					'In the end of 2021, It is a parallel of FE Camp, I got a chance to join the NITAD 18 in IT team. I working as a Backend Tech Lead and devops of this project. My job is almost same as FE Camp, creating backlogs, review code and merge it.',
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
		},
		{
			date: 'MAY 2022',
			timelineData: {
				id: 10,
				icon: 'svg/wongnai_logo.svg',
				iconType: IconType.SVG,
				iconBgColor: Color.WHITE,
				name: 'LINEMAN WONGNAI INTERNSHIP',
				description:
					'In the summer of 2022, I got a chance to be the Java Backend, Internship at Lineman Wongnai Co, I was assigned to the payout team. In this internship program, I got a very fascinating experience because I did a job that deployed to the production with the around 20M of users',
				eventDate: moment().toDate(),
				slug: 'lmwn-intern',
				thumbnail: 'https://storage.googleapis.com/samithiwat-bucket/timeline-wongnai-Background.svg',
				images: [
					{
						id: 19,
						name: 'lmwn-intern',
						description: '',
						imgUrl: 'https://storage.googleapis.com/samithiwat-bucket/timeline-wongnai-Background.svg'
					},				{
						id: 20,
						name: 'lmwn-certificate',
						description: '',
						imgUrl: 'https://storage.googleapis.com/samithiwat-bucket/timeline-background/lmwn-2022/intern-certificate.png'
					}
				]
			}
		},
		{
			date: 'JULY 2022',
			timelineData: {
				id: 11,
				icon: 'svg/sgcu_logo.svg',
				iconType: IconType.SVG,
				iconBgColor: Color.PINK_SGCU_ICON,
				name: 'ISD TEAM SGCU 65',
				description:
				'After my hard-working at ISD Team in the last year. finally, I got promoted to the president of the ISD Team of Student Government of Chulalongkorn University. I am very excited to be responsible for the higher scale of the project, previously was only the back office team',
				eventDate: moment().toDate(),
				slug: 'sgcu-2022',
				thumbnail: 'https://storage.googleapis.com/samithiwat-bucket/timeline-SGCU-Background.svg',
				images: [
					{
						id: 21,
						name: 'sgcu-0',
						description: '',
						imgUrl: 'https://storage.googleapis.com/samithiwat-bucket/timeline-SGCU-Background.svg'
					},
				]
			}
		},
		{
			date: 'JULY 2022',
			timelineData: {
				id: 12,
				icon: 'svg/rnkm_logo.svg',
				iconType: IconType.SVG,
				iconBgColor: Color.WHITE,
				name: 'FRESHER FAIRS OFFICIAL WEBSITE',
				description:
				"The Fresher Fairs website is the registration platform for fresher fairs events that are held at Chulalongkorn University. In this project, I am the Technical Lead of Backend and it is a good starting with my new position and also the good chance to get to know and training new members. This project was going well and for me, it is very successfully with users around 29K",
				eventDate: moment().toDate(),
				slug: 'rnkm-2022',
				thumbnail: 'https://storage.googleapis.com/samithiwat-bucket/timeline-background/rnkm-2022/cover.png',
				images: [
					{
						id: 22,
						name: 'rnkm-2022-cover',
						description: '',
						imgUrl: 'https://storage.googleapis.com/samithiwat-bucket/timeline-background/rnkm-2022/cover.png'
					},
					{
						id: 23,
						name: 'rnkm-2022-login',
						description: '',
						imgUrl: 'https://storage.googleapis.com/samithiwat-bucket/timeline-background/rnkm-2022/login.png'
					},
					{
						id: 24,
						name: 'rnkm-2022-all-user',
						description: '',
						imgUrl: 'https://storage.googleapis.com/samithiwat-bucket/timeline-background/rnkm-2022/all-users.png'
					},
				]
			}
		},
		{
			date: 'JULY 2022',
			timelineData: {
				id: 13,
				icon: 'svg/thinc_logo.svg',
				iconType: IconType.SVG,
				iconBgColor: Color.GRAY_ICON,
				name: 'THINC CLUB',
				description:
					"This year I was elected to be the next president of Thinc. I am very proud to get this position because I know the potential of my club that can make an impact on Chulalongkorn University and I hope I will do well as the Thinc. Alumni",
				eventDate: moment().toDate(),
				slug: 'thinc-2022',
				thumbnail: 'https://storage.googleapis.com/samithiwat-bucket/timeline-Thinc-Background.svg',
				images: [
					{
						id: 26,
						name: 'thinc-cover',
						description: '',
						imgUrl: 'https://storage.googleapis.com/samithiwat-bucket/timeline-Thinc-Background.svg'
					},
					{
						id: 27,
						name: 'firstmeet-2022',
						description: '',
						imgUrl: 'https://storage.googleapis.com/samithiwat-bucket/timeline-background/thinc-2022/firstmeet-2022.jpg'
					},
					{
						id: 28,
						name: 'firstact-frontend-2022',
						description: '',
						imgUrl: 'https://storage.googleapis.com/samithiwat-bucket/timeline-background/thinc-2022/firstact-frontend-2022.jpg'
					},
					{
						id: 29,
						name: 'firstact-pm-2022',
						description: '',
						imgUrl: 'https://storage.googleapis.com/samithiwat-bucket/timeline-background/thinc-2022/firstact-pm.jpg'
					}
				]
			}
		},
		{
			date: 'AUGUST 2022',
			timelineData: {
				id: 14,
				icon: 'svg/newbie_logo.svg',
				iconType: IconType.SVG,
				iconBgColor: Color.WHITE,
				name: 'CU NEWBIE',
				description:
					"In summer 2021 Thinc. was released to the CU Get Reg, the timetable planning platform. It was receive a very good response from the Chulalongkorn University Students. This thing is inspiring me to create the next project for Thinc. that can make an impact on Chulalongkorn University. The Newbie is the platform that will help non-experienced students, an intern, or new graduates, to find their job. I'm the founder of this project and also the technical lead of the backend team I hope this project will make a great impact like CU Get Reg do.",
				eventDate: moment().toDate(),
				slug: 'cu-newbie',
				thumbnail: 'https://storage.googleapis.com/samithiwat-bucket/timeline-background/newbie/cover.png',
				images: [
					{
						id: 30,
						name: 'newbie-cover',
						description: '',
						imgUrl: 'https://storage.googleapis.com/samithiwat-bucket/timeline-background/newbie/cover.png'
					},
					{
						id: 31,
						name: 'newbie-coming-soon',
						description: '',
						imgUrl: 'https://storage.googleapis.com/samithiwat-bucket/timeline-background/newbie/newbie-coming-soon.png'
					},
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

const createTimelineConfig = () => {
	const { subscribe, set, update } = writable<TimelineProps>({
		cardSize: {
			height: Default.CARD_MEDIUM_HEIGHT,
			width: Default.CARD_MEDIUM_WIDTH
		},
		iconSize: {
			height: Default.ICON_HEIGHT,
			width: Default.ICON_WIDTH
		},
		iconGap: Default.ICON_GAP
	});

	const setCardSize = (cardSize: Size) => {
		update((oldProps: TimelineProps) => ({
			iconSize: oldProps.iconSize,
			iconGap: oldProps.iconGap,
			cardSize
		}));
	};

	const setIconSize = (iconSize: Size) => {
		update((oldProps: TimelineProps) => ({
			iconSize,
			iconGap: oldProps.iconGap,
			cardSize: oldProps.cardSize
		}));
	};

	const setIconGap = (iconGap: number) => {
		update((oldProps: TimelineProps) => ({
			iconSize: oldProps.iconSize,
			iconGap,
			cardSize: oldProps.cardSize
		}));
	};

	return {
		subscribe,
		set,
		setCardSize,
		setIconSize,
		setIconGap,
		update
	};
};

export const timelineConfig = createTimelineConfig();
export const timelineProps = createTimelineProps();
export const timelineDatas = createTimelineData();
