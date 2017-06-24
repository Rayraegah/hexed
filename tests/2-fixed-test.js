const test = require("tape");
const hexed = require("../index");

test("Fixed value tests", t => {
	t.plan(6);

	t.equal(hexed("something_ amazing!!!"), "#cb004e", "Fixed value string");
	t.equal(
		hexed({
			foo: "bar",
			bar: 1,
			2: true
		}),
		"#146fc1",
		"Fixed value object"
	);

	t.equal(hexed("AB$%^&*"), "#495049", "Symbols and text");
	t.equal(hexed("$%^&*"), "#000000", "Symbols only");
	t.equal(hexed(" "), "#000000", "Whitespace only");
	t.equal(hexed("\n"), "#000000", "Line break only");
});

test("Text case tests", t => {
	t.plan(2);

	t.equal(
		hexed("THiS ShOuLD bE eQu@L"),
		hexed("THiS ShOuLD bE eQu@L"),
		"Mixedcase === Mixedcase"
	);

	t.equal(
		hexed("this should not be equal"),
		hexed("THIS SHOULD NOT BE EQUAL"),
		"Lowercase === Uppercase"
	);
});

test("Whitespace and Symbol test", t => {
	t.plan(4);

	t.equal(hexed("AB$%^&*"), hexed("ab$%^&*"), "Symbols and text");
	t.equal(hexed("$%^&*"), hexed("$%^&*"), "Symbols only");
	t.equal(hexed(" "), hexed(" "), "Whitespace only");
	t.equal(hexed("\n"), hexed("\n"), "Line break only");
});
