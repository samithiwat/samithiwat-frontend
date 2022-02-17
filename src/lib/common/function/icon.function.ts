import { ScreenWidth } from '../enums/common';
import type { Size } from '../types/common';

export function calIconSize(width: number): Size {
	if (width > ScreenWidth.LAPTOP_MEDIUM) {
		return { height: 150, width: 150 };
	}
	if (width > ScreenWidth.LAPTOP_SMALL) {
		return { height: 100, width: 100 };
	}
	if (width > ScreenWidth.MOBILE_LARGE) {
		return { height: 75, width: 75 };
	}
	return { height: 50, width: 50 };
}
