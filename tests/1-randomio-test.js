const test = require("tape");
const hexed = require("../index");
const { random, helpers, image, company } = require("faker");

class FixtureClass {
	constructor() {
		this.data = "hexed test fixture";
	}

	print() {
		console.log(this.data);
	}
}

const fixture = [
	["string", random.words()],
	["number", random.number()],
	["array", company.suffixes()],
	["object", helpers.createTransaction()],
	["image", image.dataUri()],
	["string", random.uuid()],
	["class", FixtureClass],
	["class instance", new FixtureClass()],
	["function", console.log]
];

const isHex = h => /^#[0-9A-F]{6}$/i.test(h);

test("I/O for known datatypes", t => {
	const testLength = fixture.length;

	t.plan(testLength);

	for (let i = 0, rtn; i < testLength; i++) {
		rtn = hexed(fixture[i][1]);
		t.assert(isHex(rtn), `I/O for ${fixture[i][0]}`);
	}
});
