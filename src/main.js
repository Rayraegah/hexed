/* @flow */
const BASE = 36; // Base value
const SIZE = 3; // Number of components in color i.e. (R, G, B)

const color16 = (i, m) => {
	const s = Math.round(i / m * 255).toString(16);
	return s.length < 2 ? `0${s}` : s;
};

export default (s: any): string => {
	// Handle objects and arrays, numbers, class, function etc.
	let str = typeof s === "object"
		? JSON.stringify(s).replace(/\W+/g, "")
		: s.toString().replace(/\W+/g, "");

	console.log(str);

	const nStr = str.length;
	const amount = Math.ceil(nStr / SIZE);
	const add = amount * SIZE - nStr;
	const max = BASE ** amount - 1 || 1;

	// Longer than the number of characters to be added
	if (nStr > add) {
		str += str.substring(0, add);
	} else {
		// Append x characters to end of string
		for (let i = 0; i < add; i++) {
			// Adds the first charecter until you have enough charecters
			str += str.substring(0, 1);
		}
	}

	// Splits the string into 3 primary components of type number
	const red = parseInt(str.substring(0, amount) || "0", BASE);
	const green = parseInt(str.substring(amount, amount * 2) || "0", BASE);
	const blue = parseInt(str.substring(amount * 2, amount * 3) || "0", BASE);

	// Scales each value down to fit between 0 and 255 and converts to base16
	return `#${color16(red, max)}${color16(green, max)}${color16(blue, max)}`;
};
