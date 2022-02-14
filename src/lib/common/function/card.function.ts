import { ScreenWidth } from '../enums/common';
import type { Size } from '../types/common';

export function calMaxShown(width: number): number {
	if (width > ScreenWidth.LABTOP_MEDIUM) {
		return 5;
	}
	if (width > ScreenWidth.LABTOP_SMALL) {
		return 4;
	}
	if (width > ScreenWidth.TABLET) {
		return 3;
	}
	if (width > ScreenWidth.MOBILE_LARGE) {
		return 2;
	}
	return 1;
}

export function calCardSize(width: number): Size {
	if (width > ScreenWidth.LABTOP_SMALL) {
		return { height: 300, width: 225 };
	}
	return { height: 200, width: 150 };
}
