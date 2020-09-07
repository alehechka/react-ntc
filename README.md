# react-ntc

React Hooks module for the [Name That Color](http://chir.ag/projects/ntc/) project.

## Installation

To install react-ntc with `npm`:

    npm install react-ntc

To install react-ntc with `yarn`:

    yarn add react-ntc

# Types

```ts
interface ColorMap {
	[key: string]: string;
}

interface ColorObject {
	name: string;
	hex: string;
}

type ColorTuple = [hex: string, name: string];
```

# Hooks

```ts
useColors()

useColorObjects()

useColorTuples()

useLookupColors(hexValues: string[])

useLookupColorObjects(hexValues: string[])

useLookupColorTuples(hexValues: string[])

useNameThatColor()
```

# Functions

```ts
formatHex(hex: string)

formatHexValues(hexValues: string)
```

# Demo

View demo here: [https://alehechka.github.io/react-ntc/](https://alehechka.github.io/react-ntc/)

## License

This project is licensed under the terms of the [MIT license](/LICENSE).
