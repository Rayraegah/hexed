import babel from "rollup-plugin-babel";
const pkg = require("./package");

export default {
	entry: "src/main",
	format: "umd",
	moduleName: pkg.name,
	dest: pkg.main,
	sourceMap: true,
	plugins: [
		babel({
			exclude: "node_modules/**",
			presets: ["es2015-rollup"],
			plugins: ["transform-flow-strip-types", "syntax-flow"]
		})
	]
};
