import Colors from './Colors.json';

export interface ColorMap {
	[key: string]: string;
}

export interface ColorObject {
	name: string;
	hex: string;
}

export type ColorTuple = [string, string];

export const formatHex = (hex: string) => hex.replace('#', '').toUpperCase();

export const formatHexValues = (hexValues: string[]) => hexValues.map((hex) => formatHex(hex));

export const useColors = () => {
	return Colors as ColorMap;
};

export const useColorObjects = () => {
	const colors = useColors();
	return Object.keys(colors).map((hex) => {
		return { hex, name: colors[hex] } as ColorObject;
	});
};

export const useColorTuples = () => {
	const colors = useColors();
	return Object.keys(colors).map((hex) => {
		return [hex, colors[hex]] as ColorTuple;
	});
};

export const useLookupColors = (hexValues: string[] = []) => {
	const colors = useColors();

	return hexValues.reduce((obj, hexValue) => {
		obj[hexValue] = colors[formatHex(hexValue)];
		return obj;
	}, {} as ColorMap);
};

export const useLookupColorObjects = (hexValues: ColorObject['hex'][]) => {
	const colorObjects = useColorObjects();
	const formattedHexValues = formatHexValues(hexValues);
	return colorObjects.filter((color) => formattedHexValues.includes(color.hex));
};

export const useLookupColorTuples = (hexValues: ColorTuple[0][]) => {
	const colorTuples = useColorTuples();
	const formattedHexValues = formatHexValues(hexValues);
	return colorTuples.filter((color) => formattedHexValues.includes(color[0]));
};
