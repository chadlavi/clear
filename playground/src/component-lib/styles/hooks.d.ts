import { Breakpoint } from './numbers';
import { Colors } from './colors';
/**
 * This basic React hook returns a boolean value that reflects whether or not the given query matches.
 *
 * https://chadlavi.github.io/clear/#/helpers#usemediaquery
 */
export declare const useMediaQuery: (query: string) => boolean;
/**
 * Returns a boolean value that reflects whether or not the user's viewport is smaller than the given breakpoint.
 *
 * https://chadlavi.github.io/clear/#/helpers#usebreakpoint
 */
export declare const useBreakpoint: (breakpoint: Breakpoint) => boolean;
/**
 * Returns a boolean value that reflects whether or not the user's browser is currently in dark mode.
 *
 * https://chadlavi.github.io/clear/#/helpers#usedarkmode
 */
export declare const useDarkMode: () => boolean;
/**
 * Returns a boolean value that reflects whether or not the user's browser is currently in dark mode.
 *
 * https://chadlavi.github.io/clear/#/helpers#useresponsivecolor
 */
export declare const useResponsiveColor: (color: Colors) => string;
