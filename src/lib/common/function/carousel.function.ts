import { ScreenWidth } from '../enums/common';

export function calPointWidth(innerWidth: number, width: number, length: number): number {
	if (innerWidth > ScreenWidth.LAPTOP_MEDIUM) {
		return width / 8 / length;
	}
	if (innerWidth > ScreenWidth.TABLET) {
		return width / 4 / length;
	}
	if (innerWidth > ScreenWidth.MOBILE_OVERALL) {
		return width / 3 / length;
	}
	return width / 2 / length;
}
