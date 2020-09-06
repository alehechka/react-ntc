export interface ColorMap {
    [key: string]: string;
}
export interface ColorObject {
    name: string;
    hex: string;
}
export declare type ColorTuple = [string, string];
/**
 * Formats a single hex value into a usable format with the colors map.
 */
export declare const formatHex: (hex: string) => string;
/**
 * Formats an array of hex values into a usable format with the colors map.
 */
export declare const formatHexValues: (hexValues?: string[]) => string[];
/**
 * Returns all colors in a map of colors.
 */
export declare const useColors: () => ColorMap;
/**
 * Returns all colors in an array of color objects.
 */
export declare const useColorObjects: () => ColorObject[];
/**
 * Returns all colors in an array of color tuples.
 */
export declare const useColorTuples: () => ColorTuple[];
/**
 * Returns the color map of only the hex values provided.
 */
export declare const useLookupColors: (hexValues?: string[]) => ColorMap;
/**
 * Returns the color objects of only the hex values provided.
 */
export declare const useLookupColorObjects: (hexValues?: string[]) => ColorObject[];
/**
 * Returns the color tuples of only the hex values provided.
 */
export declare const useLookupColorTuples: (hexValues?: string[]) => ColorTuple[];
/**
 * Returns a function that can be used to return the name of a color based on the hex value provided to it.
 */
export declare const useNameThatColor: () => (hexValue: string) => string;
