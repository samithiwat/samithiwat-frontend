import { ScreenWidth } from '../enums/common';
import type { Size } from '../types/common';

export function calMaxShown(width: number): number {
	if (width > ScreenWidth.LAPTOP_MEDIUM) {
		return 5;
	}
	if (width > ScreenWidth.LAPTOP_SMALL) {
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

export function calSmallCardSize(width: number): Size {
	if (width > ScreenWidth.LAPTOP_SMALL) {
		return { height: 300, width: 225 };
	}
	return { height: 200, width: 150 };
}

export function calMediumCardSize(width: number): Size {
	if (width > ScreenWidth.LAPTOP_MEDIUM) {
		return { height: 450, width: 480 };
	}
	if (width > ScreenWidth.TABLET) {
		return { height: 330, width: 352 };
	}
	if (width > ScreenWidth.MOBILE_LARGE) {
		return { height: 224, width: 210 };
	}
	if (width > ScreenWidth.MOBILE_SMALL) {
		return { height: 150, width: 160 };
	}
	return { height: 120, width: 128 };
}
