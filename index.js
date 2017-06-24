(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.hexed = factory());
}(this, (function () { 'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var BASE = 36; // Base value
var SIZE = 3; // Number of components in color i.e. (R, G, B)

var color16 = function color16(i, m) {
	var s = Math.round(i / m * 255).toString(16);
	return s.length < 2 ? "0" + s : s;
};

var main = (function (s) {
	// Handle objects and arrays, numbers, class, function etc.
	var str = (typeof s === "undefined" ? "undefined" : _typeof(s)) === "object" ? JSON.stringify(s).replace(/\W+/g, "") : s.toString().replace(/\W+/g, "");

	console.log(str);

	var nStr = str.length;
	var amount = Math.ceil(nStr / SIZE);
	var add = amount * SIZE - nStr;
	var max = BASE ** amount - 1 || 1;

	// Longer than the number of characters to be added
	if (nStr > add) {
		str += str.substring(0, add);
	} else {
		// Append x characters to end of string
		for (var i = 0; i < add; i++) {
			// Adds the first charecter until you have enough charecters
			str += str.substring(0, 1);
		}
	}

	// Splits the string into 3 primary components of type number
	var red = parseInt(str.substring(0, amount) || "0", BASE);
	var green = parseInt(str.substring(amount, amount * 2) || "0", BASE);
	var blue = parseInt(str.substring(amount * 2, amount * 3) || "0", BASE);

	// Scales each value down to fit between 0 and 255 and converts to base16
	return "#" + color16(red, max) + color16(green, max) + color16(blue, max);
});

return main;

})));
//# sourceMappingURL=index.js.map
