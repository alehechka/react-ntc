import { Colors } from './Colors';

export interface ColorMap {
  [key: string]: string;
}

export interface ColorObject {
  name: string;
  hex: string;
}

export type ColorTuple = [string, string];

/**
 * Formats a single hex value into a usable format with the colors map.
 */
export const formatHex = (hex: string): string =>
  hex.replace('#', '').toUpperCase();

/**
 * Formats an array of hex values into a usable format with the colors map.
 */
export const formatHexValues = (hexValues: string[] = []): string[] =>
  hexValues.map(hex => formatHex(hex));

/**
 * Returns all colors in a map of colors.
 */
export const useColors = (): ColorMap => {
  return Colors as ColorMap;
};

/**
 * Returns all colors in an array of color objects.
 */
export const useColorObjects = (): ColorObject[] => {
  const colors = useColors();
  return Object.keys(colors).map(hex => {
    return { hex, name: colors[hex] } as ColorObject;
  });
};

/**
 * Returns all colors in an array of color tuples.
 */
export const useColorTuples = (): ColorTuple[] => {
  const colors = useColors();
  return Object.keys(colors).map(hex => {
    return [hex, colors[hex]] as ColorTuple;
  });
};

/**
 * Returns the color map of only the hex values provided.
 */
export const useLookupColors = (hexValues: string[] = []): ColorMap => {
  const colors = useColors();
  return hexValues.reduce((obj, hexValue) => {
    obj[hexValue] = colors[formatHex(hexValue)];
    return obj;
  }, {} as ColorMap);
};

/**
 * Returns the color objects of only the hex values provided.
 */
export const useLookupColorObjects = (
  hexValues: string[] = []
): ColorObject[] => {
  const colorObjects = useColorObjects();
  const formattedHexValues = formatHexValues(hexValues);
  return colorObjects.filter(color => formattedHexValues.includes(color.hex));
};

/**
 * Returns the color tuples of only the hex values provided.
 */
export const useLookupColorTuples = (
  hexValues: string[] = []
): ColorTuple[] => {
  const colorTuples = useColorTuples();
  const formattedHexValues = formatHexValues(hexValues);
  return colorTuples.filter(color => formattedHexValues.includes(color[0]));
};

/**
 * Returns a the name of a color from the hex value provided.
 */
export const useNameThatColor = (hexValue: string): string => {
  const colors = useColors();
  const formattedHexValue = formatHex(hexValue);
  return colors[formattedHexValue];
};
