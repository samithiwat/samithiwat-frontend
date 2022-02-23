import { writable } from 'svelte/store';

export const innerWidth = writable<number>(0);
export const isError = writable<boolean>(false);
